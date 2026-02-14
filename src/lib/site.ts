const FALLBACK_SITE_URL = "https://impactstack.africa";

export const siteUrl = (import.meta.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/$/, "");

export const absoluteUrl = (path = "/"): string => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
};
