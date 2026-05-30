import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Database, Code2, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Student Result Management System",
    description: "Desktop application for managing and displaying student academic results with full CRUD operations. Features admin login authentication.",
    stack: ["Python", "MySQL", "Tkinter"],
    icon: Database,
    highlight: "Normalized relational database schema"
  },
  {
    title: "COVID-19 Data Analysis Dashboard",
    description: "Exploratory Data Analysis on a 100,000+ record dataset. Cleaned data, visualized trends, and generated automated summary reports.",
    stack: ["Python", "Pandas", "Matplotlib", "Excel"],
    icon: LineChart,
    highlight: "100k+ records processed"
  },
  {
    title: "Personal Portfolio Website",
    description: "Fully responsive personal portfolio with reusable components, CSS animations, smooth scrolling, and SEO meta tags.",
    stack: ["ReactJS", "HTML5", "CSS3", "JavaScript"],
    icon: Code2,
    highlight: "Hosted on GitHub Pages"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Work</h2>
          <div className="h-px bg-primary/30 flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-background/50 hover:bg-background transition-colors border-border/60 hover:border-primary/50 group">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <project.icon size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-mono text-primary/80 mt-2">
                    {project.highlight}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2 w-full">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
