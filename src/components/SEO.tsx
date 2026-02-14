import { useEffect } from "react";
import { absoluteUrl } from "@/lib/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_TITLE = "ImpactStack Africa | Enterprise Software Development Cape Town";
const DEFAULT_DESCRIPTION =
  "Youth-led Cape Town software agency. Web apps from R50k, mobile apps from R80k. Google Cybersecurity certified. Enterprise quality. Startup pricing.";
const DEFAULT_IMAGE = "/placeholder.svg";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
};

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = "/",
  robots = "index, follow",
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(url);
    const resolvedImage = absoluteUrl(image);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", resolvedImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", resolvedImage);

    upsertCanonical(canonicalUrl);

    const scriptId = "seo-structured-data";
    const existing = document.getElementById(scriptId);

    if (structuredData) {
      const script = existing || document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(structuredData);
      if (!existing) {
        document.head.appendChild(script);
      }
    } else if (existing) {
      existing.remove();
    }
  }, [description, image, robots, structuredData, title, url]);

  return null;
}
