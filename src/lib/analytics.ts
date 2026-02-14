export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initializedAnalyticsId: string | null = null;

export const initAnalytics = (measurementId?: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  const id = measurementId?.trim();
  if (!id || initializedAnalyticsId === id) {
    return;
  }

  const existingScript = document.querySelector(`script[data-gtag-id="${id}"]`);
  if (!existingScript) {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    gtagScript.setAttribute("data-gtag-id", id);
    document.head.appendChild(gtagScript);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
  initializedAnalyticsId = id;
};

export const pageview = (url: string): void => {
  const id = import.meta.env.VITE_GA_ID?.trim();
  if (!id || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", id, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: AnalyticsEvent): void => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
