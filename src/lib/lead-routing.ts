import type { ProjectCase } from "@/lib/projects";

const DEFAULT_LEAD_SOURCE = "portfolio";

export const buildProjectInquiryHref = (project: ProjectCase, source = DEFAULT_LEAD_SOURCE) => {
  const params = new URLSearchParams({
    projectType: project.inquiryType,
    projectInterest: project.title,
    source,
  });

  return `/contact?${params.toString()}`;
};
