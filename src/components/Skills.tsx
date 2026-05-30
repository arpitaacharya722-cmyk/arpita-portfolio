import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiHtml5, SiReact, SiBootstrap, SiPandas, SiNumpy, SiMysql, SiSqlite, SiGit, SiGithub } from "react-icons/si";
import { Cloud, BarChart2, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", Icon: SiPython, type: "si" },
      { name: "JavaScript", Icon: SiJavascript, type: "si" },
      { name: "HTML5", Icon: SiHtml5, type: "si" },
      { name: "CSS3", Icon: null, type: "si" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", Icon: SiReact, type: "si" },
      { name: "Bootstrap", Icon: SiBootstrap, type: "si" },
      { name: "Pandas", Icon: SiPandas, type: "si" },
      { name: "NumPy", Icon: SiNumpy, type: "si" },
      { name: "Matplotlib", Icon: null, type: "si" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", Icon: SiMysql, type: "si" },
      { name: "SQLite", Icon: SiSqlite, type: "si" },
      { name: "Database Design", Icon: null, type: "si" },
      { name: "Query Optimization", Icon: null, type: "si" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Microsoft Azure", Icon: Cloud, type: "lucide" },
      { name: "Git", Icon: SiGit, type: "si" },
      { name: "GitHub", Icon: SiGithub, type: "si" },
      { name: "VS Code", Icon: null, type: "si" },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Data Analysis", Icon: BarChart2, type: "lucide" },
      { name: "Excel", Icon: null, type: "si" },
      { name: "Data Visualization", Icon: null, type: "si" },
      { name: "Google Analytics", Icon: null, type: "si" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Analytical Thinking", Icon: null, type: "si" },
      { name: "Problem Solving", Icon: null, type: "si" },
      { name: "Team Collaboration", Icon: Users, type: "lucide" },
      { name: "Quick Learner", Icon: null, type: "si" },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-primary/30 flex-1 mr-4 hidden md:block" />
          <h2 className="text-3xl md:text-5xl font-bold text-right">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-lg font-mono font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg text-sm font-medium border border-border"
                  >
                    {skill.Icon && (
                      <skill.Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
