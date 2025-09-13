import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, type Variants } from "framer-motion";

import tubespace1 from "/tubespace1.png";
import tubespace2 from "/tubespace2.png";
import midfruits1 from "/midfruits1.png";
import midfruits2 from "/midfruits2.png";
import sarimgpt1 from "/sarimgpt1.png";
import sarimgpt2 from "/sarimgpt2.png";
import kgpt1 from "/kanoongpt1.png";
import kgpt2 from "/kanoongpt2.png";
import sarimgptDemoVideo from "/sarimgpt.mp4";

import { CardSwap } from "./svg";

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
    title: "KanoonGPT",
    description: "AI Legal Assistant for Indian Laws. Still in development!",
    files: [
      { src: kgpt1, type: "image" },
      { src: kgpt2, type: "image" },
    ],
    githubLink: "https://github.com/Shreesammat/kanoonGPT",
    liveSiteLink: "https://kanoon-gpt.vercel.app/",
    techStack: ["Next.js", "TRPC", "Supabase", "Shivaay API", "Gemini API"],
  },
];

// Motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export const SelectedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="space-y-2 px-5">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">
              Selected Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my recent work, demonstrating my skills and passion
              for building impactful applications.
            </p>
            <br />
            <div className="flex sm:hidden flex-col gap-4 justify-center items-center">
              <p className="text-purple-500 dark:text-purple-400">
                You can swipe through my projects
              </p>
              <CardSwap />
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-2 sm:gap-10 justify-center items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={index}
              className="w-full"
            >
              <Card className="flex rounded-2xl lg:flex-row gap-0 flex-col justify-center items-center h-full w-full">
                {/* Image Carousel */}
                <CardContent className="flex justify-center items-center w-full lg:w-[60%]">
                  <Carousel className="w-full border-none rounded-2xl">
                    <CarouselContent>
                      {project.files.map((file, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted relative">
                            {file.type === "image" ? (
                              <BlurImage
                                src={file.src}
                                alt={`${project.title} - ${imgIndex + 1}`}
                              />
                            ) : (
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                controls
                              >
                                <source src={file.src} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-2" />
                    <CarouselNext className="mr-2" />
                  </Carousel>
                </CardContent>

                {/* Description */}
                <div className="flex flex-col gap-2 w-full lg:w-[40%]">
                  <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-2xl font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-3 py-1 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button asChild variant="outline">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild>
                        <a
                          href={project.liveSiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Site
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {index < projects.length - 1 && (
                <div className="col-span-full flex justify-center items-center py-4 md:hidden">
                  <Separator className="w-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlurImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
        loaded ? "blur-0" : "blur-sm animate-pulse"
      }`}
    />
  );
};
