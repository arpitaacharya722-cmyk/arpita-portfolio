import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Techno International New Town",
    location: "Kolkata, West Bengal",
    period: "2024 – 2027",
    status: "Pursuing",
    description: "6th Semester undergraduate. Focused on software development, databases, data analytics, and web technologies.",
  },
  {
    degree: "Diploma in Metallurgical Engineering",
    institution: "Engineering Institute For Junior Executives",
    location: "West Bengal",
    period: "2021 – 2024",
    status: "Completed",
    description: "3-year diploma program developing strong analytical and engineering fundamentals.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "West Bengal Board",
    location: "West Bengal",
    period: "Completed",
    status: "Completed",
    description: "",
  },
  {
    degree: "Secondary (10th)",
    institution: "West Bengal Board",
    location: "West Bengal",
    period: "Completed",
    status: "Completed",
    description: "",
  },
];

const certifications = [
  {
    title: "Foundations of Data Analytics: Data, Data Everywhere",
    issuer: "Google / Coursera",
  },
  {
    title: "Azure Cognitive Services – Computer Vision",
    issuer: "Microsoft Certified",
  },
  {
    title: "Microsoft Excel – Budget Creation & Data Management",
    issuer: "Coursera",
  },
  {
    title: "Microsoft Office Specialist (Word, Excel, PowerPoint)",
    issuer: "Coursera",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-primary/30 flex-1 mr-4 hidden md:block" />
            <h2 className="text-3xl md:text-5xl font-bold text-right">Education & Certs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-lg font-mono font-bold text-primary mb-8 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Academic Journey
              </h3>
              <div className="relative pl-6 border-l border-border space-y-8">
                {education.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[1.8rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground leading-snug">{item.degree}</h4>
                        <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-mono ${
                          item.status === "Pursuing"
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{item.institution}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-mono font-bold text-primary mb-8 flex items-center gap-2">
                <Award className="w-5 h-5" /> Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm leading-snug">{cert.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-mono">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Co-curricular */}
              <div className="mt-10">
                <h3 className="text-lg font-mono font-bold text-primary mb-6">Activities</h3>
                <ul className="space-y-3">
                  {[
                    "Participated in college-level technical workshops on emerging technologies",
                    "Completed online problem-solving challenges for algorithmic thinking",
                    "Active member of college IT club — events and tech-awareness sessions",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
