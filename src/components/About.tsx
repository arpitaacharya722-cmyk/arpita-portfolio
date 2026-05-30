import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/50 border-y border-border px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
            <div className="h-px bg-primary/30 flex-1 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a motivated Information Technology undergraduate at Techno International New Town (6th Semester), driven by a deep curiosity for how data and code shape our world.
              </p>
              <p>
                With hands-on experience in Python, SQL, web technologies, and data analytics, I specialize in building practical software solutions. I'm constantly learning, iterating, and looking for opportunities to contribute to real-world applications.
              </p>
              <p>
                Beyond the terminal, I enjoy exploring logical puzzles, pencil sketching, reading, and singing. I believe in continuous growth and the power of collaborative problem-solving.
              </p>
            </div>

            <div className="space-y-6 bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-6 font-mono text-primary">Quick Facts</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-md"><GraduationCap className="w-5 h-5 text-primary" /></div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Education</span>
                    <span className="font-medium text-foreground">B.Tech IT (Batch 2027)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-md"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">Asansol, West Bengal</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-md"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <a href="mailto:arpitaacharya722@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">arpitaacharya722@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-md"><Phone className="w-5 h-5 text-primary" /></div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Phone</span>
                    <span className="font-medium text-foreground">+91 9064343993</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
