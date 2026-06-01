import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadCV } from "@/lib/generateCV";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono font-medium mb-2 border border-border">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm <span className="text-primary">Arpita</span><br />
            Aspiring Developer.
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Information Technology undergraduate passionate about Python, data analytics, and building scalable web applications.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="font-mono group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono"
              onClick={downloadCV}
              data-testid="button-download-cv"
            >
              <Download className="mr-2 w-4 h-4" /> Download CV
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-8">
            <a href="https://linkedin.com/in/arpita-acharya-133a93358" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:arpitaacharya722@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ProfileBlock />
        </motion.div>
      </div>
    </section>
  );
}

function ProfileBlock() {
  const [showFallback, setShowFallback] = useState(false);
  const publicUrl = `${import.meta.env.BASE_URL || "/"}profile.jpg`;

  const placeholder = (
    <div className="text-6xl font-mono text-muted-foreground/30 font-bold select-none">&lt;/&gt;</div>
  );

  return (
    <div className="w-72 h-72 md:w-96 md:h-96 relative flex flex-col items-center">
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 border-2 border-dashed border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-8 bg-secondary rounded-full flex items-center justify-center overflow-hidden border border-border shadow-2xl">
          {!showFallback ? (
            <img
              src={publicUrl}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={() => setShowFallback(true)}
            />
          ) : (
            placeholder
          )}
        </div>
      </div>
    </div>
  );
}
