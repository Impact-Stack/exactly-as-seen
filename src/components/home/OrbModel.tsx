import { useEffect, useRef, useState } from "react";

/** Procedural glass sculpture; Three.js is only downloaded after the hero mounts. */
export default function OrbModel() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    const initialise = async () => {
      const [THREE, { RoomEnvironment }] = await Promise.all([
        import("three"),
        import("three/addons/environments/RoomEnvironment.js"),
      ]);
      if (disposed) return;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1 : 1.5),
      );
      renderer.setClearColor(0x020204, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
      camera.position.z = 6.8;
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environmentScene = new RoomEnvironment();
      const environment = pmrem.fromScene(environmentScene, 0.04);
      scene.environment = environment.texture;
      environmentScene.dispose();
      pmrem.dispose();
      const sculpture = new THREE.Group();
      scene.add(sculpture);
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(1.28, 48, 32),
        new THREE.MeshPhysicalMaterial({
          color: 0xb4dbff,
          metalness: 0.12,
          roughness: 0.1,
          transparent: true,
          opacity: 0.22,
          clearcoat: 1,
          clearcoatRoughness: 0.06,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      sculpture.add(shell);
      // Interlaced ribbons mirror the original blue/cyan/violet glass orb.
      const colours = [0x235dff, 0x43d8ff, 0x9852f6, 0xdcb7ff];
      colours.forEach((colour, index) => {
        const ribbon = new THREE.Mesh(
          new THREE.TorusGeometry(1.04, 0.13, 16, 96),
          new THREE.MeshPhysicalMaterial({
            color: colour,
            metalness: 0.48,
            roughness: 0.16,
            clearcoat: 1,
            emissive: colour,
            emissiveIntensity: 0.1,
          }),
        );
        ribbon.rotation.set(0.5 + index * 0.67, index * 0.75, index * 0.4);
        ribbon.scale.set(1, 0.87, 1);
        sculpture.add(ribbon);
      });
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.49, 2),
        new THREE.MeshPhysicalMaterial({
          color: 0x292265,
          metalness: 0.7,
          roughness: 0.23,
          clearcoat: 1,
        }),
      );
      sculpture.add(core);
      const positions = new Float32Array(45 * 3);
      for (let i = 0; i < 45; i++) {
        const angle = i * 2.39996;
        const y = 1 - (i / 44) * 2;
        const r = Math.sqrt(1 - y * y) * 0.93;
        positions.set(
          [Math.cos(angle) * r, y * 0.93, Math.sin(angle) * r],
          i * 3,
        );
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      sculpture.add(
        new THREE.Points(
          particlesGeometry,
          new THREE.PointsMaterial({
            color: 0xc4ddff,
            size: 0.025,
            transparent: true,
            opacity: 0.8,
          }),
        ),
      );
      scene.add(new THREE.AmbientLight(0xffffff, 1));
      const key = new THREE.DirectionalLight(0xe8f4ff, 4);
      key.position.set(2, 3, 4);
      scene.add(key);
      const blue = new THREE.PointLight(0x357bff, 18);
      blue.position.set(-2, 1, 2);
      scene.add(blue);
      const violet = new THREE.PointLight(0xb25bff, 14);
      violet.position.set(2, -2, 1);
      scene.add(violet);
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      let frame = 0;
      let last = 0;
      let visible = true;
      let running = false;
      let pointerX = 0;
      let pointerY = 0;
      const render = () => renderer.render(scene, camera);
      const tick = (time: number) => {
        if (!running) return;
        frame = requestAnimationFrame(tick);
        if (time - last < 33) return; // Cap at 30fps.
        last = time;
        sculpture.rotation.y = time * 0.00012 + pointerX * 0.12;
        sculpture.rotation.x =
          Math.sin(time * 0.00015) * 0.15 + pointerY * 0.08;
        render();
      };
      const updateAnimation = () => {
        cancelAnimationFrame(frame);
        running = visible && !document.hidden && !media.matches;
        if (running) frame = requestAnimationFrame(tick);
        else render();
      };
      const resize = () => {
        const { width, height } = element.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        render();
      };
      const onPointer = (event: PointerEvent) => {
        if (media.matches || event.pointerType !== "mouse") return;
        const rect = element.getBoundingClientRect();
        pointerX = (event.clientX - rect.left) / rect.width - 0.5;
        pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      };
      const onContextLost = (event: Event) => {
        event.preventDefault();
        running = false;
        cancelAnimationFrame(frame);
        setReady(false);
      };
      const resizeObserver = new ResizeObserver(resize);
      const intersectionObserver = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        updateAnimation();
      });
      element.appendChild(renderer.domElement);
      renderer.domElement.addEventListener("webglcontextlost", onContextLost);
      element.addEventListener("pointermove", onPointer);
      resizeObserver.observe(element);
      intersectionObserver.observe(element);
      document.addEventListener("visibilitychange", updateAnimation);
      media.addEventListener("change", updateAnimation);
      resize();
      setReady(true);
      updateAnimation();
      cleanup = () => {
        running = false;
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        media.removeEventListener("change", updateAnimation);
        document.removeEventListener("visibilitychange", updateAnimation);
        element.removeEventListener("pointermove", onPointer);
        renderer.domElement.removeEventListener(
          "webglcontextlost",
          onContextLost,
        );
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];
            materials.forEach((material) => material.dispose());
          }
        });
        environment.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };
    initialise().catch(() => {
      if (!disposed) setReady(false);
    });
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);
  return (
    <div
      className="relative w-full aspect-square"
      aria-hidden="true"
      data-orb-ready={ready}
    >
      <img
        src="/images/orb-fallback.webp"
        alt=""
        width="800"
        height="600"
        className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      <div
        ref={host}
        className={`absolute inset-0 transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
