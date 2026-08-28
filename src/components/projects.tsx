'use client'
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionLabel } from "@/components/ui/kit";
import { motion, type Variants } from "framer-motion";

import tubespace1 from "/projects/tubespace1.webp";
import tubespace2 from "/projects/tubespace2.webp";
import midfruits1 from "/projects/midfruits1.webp";
import midfruits2 from "/projects/midfruits2.webp";
import sarimgpt1 from "/projects/sarimgpt1.webp";
import sarimgpt2 from "/projects/sarimgpt2.webp";
// import kgpt1 from "/kanoongpt1.png";
import sarimgptDemoVideo from "/sarimgpt.mp4";
import woos1 from "/projects/woos1.webp"
import woos2 from "/projects/woos2.webp"
import eg1 from "/projects/EdgeGuard.webp";
import em1 from "/projects/EventMesh.webp"

export type FileType = "image" | "video";

interface Project {
  id: string;
  title: string;
  description: string;
  files: { src: string; type: FileType }[];
  githubLink: string;
  liveSiteLink: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "7",
    title: "MetaGraph-MCP",
    description: "MetaGraph-MCP is a live metadata platform that automatically syncs a governed catalog with a business database. It uses event-driven schema tracking, AST-based SQL lineage, and an LLM-powered Scribe Agent for idempotent business descriptions and PII tagging. The resulting schema, lineage, and PII metadata is accessible via REST APIs and native MCP",
    files: [
      { src: "https://www.loom.com/embed/40be560d55b249ee9c8d15680db677eb", type: "video" },
      { src: "https://www.loom.com/embed/7cac8fbb58d340d49cf36fbcba50db02", type: "video" }
    ],
    githubLink: "https://github.com/midsane/MetaGraph-MCP",
    liveSiteLink: "https://github.com/midsane/MetaGraph-MCP",
    techStack: ["PostgresDB", "VectorDB-Qdrant", "KnowledgeDB-Neo4j", "Docker", "Typescript"],
  },
  {
    id: "6",
    title: "Bubble-Tea",
    description: "AI coding agent harness (TypeScript, Ink TUI) demonstrating harness engineering: multi-provider LLM support, tool registry with MCP integration, plan-act-observe loop, persistent JSONL sessions, sub-agents with background execution, deterministic hook guardrails, and an eval/repair loop.",
    files: [
      { src: "https://www.loom.com/embed/0eb88af91a104a16b326ddaa61f4e38f", type: "video" },
    ],
    githubLink: "https://github.com/midsane/bubble-tea",
    liveSiteLink: "https://github.com/midsane/bubble-tea",
    techStack: ["TS", "React-INK", "MCP"],
  },
  {
    id: "5",
    title: "EdgeGuard",
    description: "Built a distributed rate limiter using token bucket + leasing to minimize latency and Redis contention. Uses local caching, Lua-based atomic operations, and Redis cluster sharding to handle ~20k req/sec with stable latency",
    files: [
      { src: eg1, type: "image" },
    ],
    githubLink: "https://github.com/midsane/EdgeGuard",
    liveSiteLink: "https://github.com/midsane/EdgeGuard",
    techStack: ["Redis", "AWS", "Docker", "Javascript"],
  },
  {
    id: "8",
    title: "EventMesh",
    description: "EventMesh is a backend system that crawls news from the internet, analyzes each article using LLMs + vector embeddings, and automatically builds timelines of related events.",
    files: [
      { src: em1, type: "image" },
    ],
    githubLink: "https://github.com/midsane/EventMesh",
    liveSiteLink: "https://github.com/midsane/EventMesh",
    techStack: ["Typescript", "Pinecone", "GenAI", "Cohere AI", "GraphQL"],
  },
  {
    id: "1",
    title: "Tubespace",
    description:
      "Designed a collaborative video publishing platform that uploads large YouTube videos server-side to overcome poor internet at the creator’s end.",
    files: [
      { src: tubespace1, type: "image" },
      { src: tubespace2, type: "image" },
    ],
    githubLink: "https://github.com/midsane/tubespace",
    liveSiteLink: "https://tubespace.studio",
    techStack: [
      "React",
      "Zustand",
      "Express",
      "TypeScript",
      "Youtube Data API",
      "Redis",
      "Prisma",
      "React-Query",
    ],
  },
  {
    id: "2",
    title: "SarimGPT",
    description: "A Multi-Modal AI Chatbot for text and image generation",
    files: [
      { src: sarimgptDemoVideo, type: "video" },
      { src: sarimgpt1, type: "image" },
      { src: sarimgpt2, type: "image" },
    ],
    githubLink: "https://github.com/midsane/SarimGPT",
    liveSiteLink: "https://sarim-gpt.vercel.app/",
    techStack: ["Next.js", "TRPC", "Supabase", "Shivaay API", "Gemini API"],
  },
  {
    id: "3",
    title: "Midfruits",
    description:
      "Built a real-time multiplayer web game enabling players to create custom rooms, invite friends, and compete in dynamic fruit-catching battles.",
    files: [
      { src: midfruits1, type: "image" },
      { src: midfruits2, type: "image" },
    ],
    githubLink: "https://github.com/midsane/midfruits",
    liveSiteLink: "https://midfruits.midsane.tech/",
    techStack: ["React", "Recoil", "Node.js", "Socket.IO", "Framer-Motion"],
  },
  {
    id: "4",
    title: "Winter Of Open Source",
    description: "A Firebase-powered registration and leaderboard system for managing and tracking student participation in the Winter of Open Source program",
    files: [
      { src: woos1, type: "image" },
      { src: woos2, type: "image" },
    ],
    githubLink: "https://github.com/midsane/winter-of-open-source",
    liveSiteLink: "https://winter-of-open-source.vercel.app/",
    techStack: ["Next.js", "Firebase"],
  }
];


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

export const SelectedProjects: React.FC = () => {
  return (
    <section id="projects" className="w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
        >
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="mt-3 font-mono text-2xl font-medium uppercase tracking-tight text-foreground sm:text-3xl">
            Projects
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="flex flex-col gap-6 border-t border-border/60 py-10 sm:py-14 lg:flex-row lg:gap-12"
            >
              {/* Media */}
              <div className="w-full lg:w-[56%]">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.files.map((file, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-[16/9] w-full overflow-hidden border border-border/60 bg-muted">
                          {file.type === "image" ? (
                            <ProjectImage
                              src={file.src}
                              alt={`${project.title} - ${imgIndex + 1}`}
                              loading="lazy"
                              fetchPriority="auto"
                            />
                          ) : file.src.includes("loom.com") ? (
                            <iframe
                              className="h-full w-full"
                              src={file.src}
                              title={`${project.title} - ${imgIndex + 1}`}
                              allow="fullscreen"
                              allowFullScreen
                              loading="lazy"
                            />
                          ) : (
                            <video
                              className="h-full w-full object-cover"
                              loop
                              muted
                              controls
                              preload="none"
                              poster="/projects/sarimgpt1-480.webp"
                            >
                              <source src={file.src} type="video/mp4" />
                              <track
                                kind="captions"
                                src="/sarimgpt-captions.vtt"
                                srcLang="en"
                                label="English"
                                default
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.files.length > 1 && (
                    <>
                      <CarouselPrevious className="left-3 rounded-none border-border/60 bg-background/80 backdrop-blur" />
                      <CarouselNext className="right-3 rounded-none border-border/60 bg-background/80 backdrop-blur" />
                    </>
                  )}
                </Carousel>
              </div>

              {/* Detail */}
              <div className="flex w-full flex-col lg:w-[44%]">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-lg font-medium uppercase tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="border border-border/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border/70 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  <a
                    href={project.liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-foreground px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectImage: React.FC<{
  src: string;
  alt: string;
  loading: "eager" | "lazy";
  fetchPriority: "high" | "auto";
}> = ({ src, alt, loading, fetchPriority }) => (
  <img
    src={src}
    srcSet={`/projects/${src.split("/").pop()?.replace(".webp", "-480.webp")} 480w, ${src} 1280w`}
    sizes="(min-width: 1024px) 690px, calc(100vw - 32px)"
    alt={alt}
    width={1280}
    height={720}
    loading={loading}
    fetchPriority={fetchPriority}
    decoding="async"
    className="w-full h-full object-cover"
  />
);
