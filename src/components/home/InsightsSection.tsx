import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import blogFlutter from "@/assets/blog-flutter.jpg";
import blogPopia from "@/assets/blog-popia.jpg";
import blogGovt from "@/assets/blog-govt.jpg";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { getProjectById, projectInsightsSeed } from "@/lib/projects";
import { Button, Card, CardContent, Chip } from "@mui/material";

const postImages = [blogPopia, blogGovt, blogFlutter];

const posts = projectInsightsSeed.reduce<Array<{
  id: string;
  title: string;
  category: "Security" | "Architecture" | "Mobile";
  date: string;
  summary: string;
  projectId: string;
  image: string;
  relatedProject: NonNullable<ReturnType<typeof getProjectById>>;
}>>((acc, item, index) => {
    const relatedProject = getProjectById(item.projectId);
    if (!relatedProject) {
      return acc;
    }

    acc.push({
      ...item,
      relatedProject,
      image: postImages[index % postImages.length],
    });

    return acc;
  }, []);

export default function InsightsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 text-white">
            Latest Insights
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-[#B5B7C6]">
            Technical briefs grounded in real project delivery decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
            >
              <Card className="surface-card overflow-hidden card-hover">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover opacity-90" loading="lazy" />
                <CardContent className="p-6">
                  <Chip label={post.category} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD", mb: 2 }} />
                  <h3 className="text-subtitle text-white mb-2">{post.title}</h3>
                  <p className="text-small text-[#A1A1B5] mb-4">{post.date}</p>
                  <Button
                    component={Link}
                    to={`/portfolio#${post.relatedProject.id}`}
                    onClick={() =>
                      trackEvent({
                        action: "insight_project_click",
                        category: "Home Insights",
                        label: `home_link:${post.relatedProject.id}`,
                      })
                    }
                    variant="text"
                    color="secondary"
                    sx={{ justifyContent: "flex-start", paddingLeft: 0, color: "#C4B5FD" }}
                  >
                    View related project →
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button component={Link} to="/insights" variant="outlined" color="secondary" className="button-secondary px-8 py-4 text-body">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}

