import type { ProjectCase } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export const buildProjectItemListSchema = (
  projects: ProjectCase[],
  name = "ImpactStack Africa Project Delivery Portfolio",
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: absoluteUrl(`/portfolio#${project.id}`),
      keywords: project.technologies.join(", "),
      creator: {
        "@type": "Organization",
        name: "ImpactStack Africa",
      },
    },
  })),
});

export const buildProjectFaqSchema = (items: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
