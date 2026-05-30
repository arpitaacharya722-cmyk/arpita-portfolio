import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, ExternalLink,
  Send, Download, CheckCircle2, AlertCircle, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadCV } from "@/lib/generateCV";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

const emailjsConfigured = !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arpitaacharya722@gmail.com",
    href: "mailto:arpitaacharya722@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9064343993",
    href: "tel:+919064343993",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Asansol, West Bengal, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arpita-acharya-133a93358",
    href: "https://linkedin.com/in/arpita-acharya-133a93358",
  },
];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Bengali", level: "Native" },
  { name: "Hindi", level: "Conversational" },
];

const interests = [
  "Exploring New Technologies",
  "Logical Puzzles & Problem Solving",
  "Pencil Sketching",
  "Reading",
  "Singing",
];

type FormState = "idle" | "sending" | "success" | "error";

interface FormFields {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

const initialFields: FormFields = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailjsConfigured) return;

    setFormState("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name:  fields.from_name,
          from_email: fields.from_email,
          subject:    fields.subject,
          message:    fields.message,
          to_email:   "arpitaacharya722@gmail.com",
        },
        { publicKey: PUBLIC_KEY! }
      );
      setFormState("success");
      setFields(initialFields);
    } catch (err: any) {
      setFormState("error");
      setErrorMsg(err?.text || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="h-px bg-primary/30 flex-1 ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Left: info + actions ───────────────────────────────────── */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently looking for placement and off-campus opportunities.
                Whether you have a question, a project in mind, or just want to
                connect — my inbox is always open.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                          data-testid={`link-contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                          {item.href.startsWith("http") && (
                            <ExternalLink className="w-3 h-3 opacity-50" />
                          )}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono"
                  onClick={downloadCV}
                  data-testid="button-download-cv-contact"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-wider">
                  Languages Known
                </h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2"
                    >
                      <span className="font-medium text-foreground text-sm">{lang.name}</span>
                      <span className="text-xs font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground rounded">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-wider">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary border border-border rounded-full text-xs font-medium text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: contact form ────────────────────────────────────── */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                <p className="text-sm text-muted-foreground mb-8">
                  {emailjsConfigured
                    ? "Your message will be delivered directly to Arpita's inbox."
                    : "Email service not configured yet — messages go to your default email app."}
                </p>

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-lg font-semibold">Message Sent!</h4>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        Thanks for reaching out. Arpita will get back to you soon.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-2 font-mono"
                        onClick={() => setFormState("idle")}
                      >
                        Send Another
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="from_name"
                            value={fields.from_name}
                            onChange={handleChange}
                            required
                            placeholder="Jane Smith"
                            data-testid="input-contact-name"
                            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="from_email"
                            value={fields.from_email}
                            onChange={handleChange}
                            required
                            placeholder="jane@example.com"
                            data-testid="input-contact-email"
                            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={fields.subject}
                          onChange={handleChange}
                          required
                          placeholder="Internship opportunity at XYZ"
                          data-testid="input-contact-subject"
                          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={fields.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Hi Arpita, I came across your portfolio and..."
                          data-testid="textarea-contact-message"
                          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                        />
                      </div>

                      {/* Error banner */}
                      <AnimatePresence>
                        {formState === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                          >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {errorMsg || "Failed to send. Please try again."}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      {emailjsConfigured ? (
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full font-mono group"
                          disabled={formState === "sending"}
                          data-testid="button-submit-contact"
                        >
                          {formState === "sending" ? (
                            <>
                              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              Send Message
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          size="lg"
                          className="w-full font-mono group"
                          asChild
                          data-testid="button-mailto-contact"
                        >
                          <a
                            href={`mailto:arpitaacharya722@gmail.com?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(`Name: ${fields.from_name}\nEmail: ${fields.from_email}\n\n${fields.message}`)}`}
                          >
                            <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Open in Email App
                          </a>
                        </Button>
                      )}

                      {!emailjsConfigured && (
                        <p className="text-center text-xs text-muted-foreground/60">
                          Direct sending will be enabled once EmailJS is configured.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Declaration */}
              <div className="mt-6 bg-background border border-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "I hereby declare that all the information provided is true and correct to the best of my knowledge and belief."
                </p>
                <p className="text-sm font-semibold text-primary mt-3 font-mono">
                  — Arpita Acharya, Asansol, West Bengal
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
