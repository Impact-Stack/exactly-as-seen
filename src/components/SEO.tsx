import { useEffect } from "react";
import { absoluteUrl } from "@/lib/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  robots?: string;
  type?: "website" | "article";
  siteName?: string;
  locale?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_TITLE = "ImpactStack Africa | Enterprise Software Development Cape Town";
const DEFAULT_DESCRIPTION =
  "Enterprise technology delivery partner in Cape Town. Secure software, mobile platforms, and compliance-focused implementation for South African organizations.";
const DEFAULT_IMAGE = "/placeholder.svg";
const DEFAULT_SITE_NAME = "ImpactStack Africa";
const DEFAULT_LOCALE = "en_ZA";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const removeMeta = (attribute: "name" | "property", key: string) => {
  const element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (element) {
    element.remove();
  }
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
  type = "website",
  siteName = DEFAULT_SITE_NAME,
  locale = DEFAULT_LOCALE,
  keywords,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(url);
    const resolvedImage = absoluteUrl(image);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    if (keywords && keywords.length > 0) {
      upsertMeta("name", "keywords", keywords.join(", "));
    } else {
      removeMeta("name", "keywords");
    }

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", locale);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("property", "og:image:alt", `${title} social preview`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", resolvedImage);
    upsertMeta("name", "twitter:image:alt", `${title} preview image`);

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
  }, [description, image, keywords, locale, robots, siteName, structuredData, title, type, url]);

  return null;
}
