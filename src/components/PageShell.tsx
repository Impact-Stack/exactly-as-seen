import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#0047BB] focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-[72px]">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
