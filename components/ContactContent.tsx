"use client";
import React, { useState } from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMailSpark } from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";

export default function ContactPage() {
  // 1. STATE MANAGEMENT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // 3. VALIDATION LOGIC
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.subject.length < 5) newErrors.subject = "Subject must be at least 5 characters";

    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 4. HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);

    if (validate()) {
      setIsSubmitting(true);

      // Simulate API Call (Wait 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form Data Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">

      {/* HEADER */}
      <LampContainer className="pt-36 h-[40vh]">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Get In Touch
        </motion.h1>
      </LampContainer>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Let's build something <span className="text-blue-500">great together</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              I am currently looking for <span className="text-white font-medium">full-time opportunities</span> or <span className="text-white font-medium">freelance projects</span>.
              Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
                  <IconMailSpark className="text-white group-hover:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium">Email me at</p>
                  <a href="mailto:contact@moksh.dev" className="text-white hover:text-blue-400 transition-colors">
                    moksh.shah.mps@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-neutral-400 text-sm mb-4">Connect on Socials</p>
                <div className="flex gap-4">
                  {/* <SocialLink href="https://github.com/mokshpshah" icon={<IconBrandGithub size={20} />} />
                  <SocialLink href="https://wa.me/9427390651?text=Hi%20I%20want%20to%20more%20about%20this!" icon={<IconBrandWhatsapp size={20} />} />
                  <SocialLink href="https://linkedin.com/in/me-moksh" icon={<IconBrandLinkedin size={20} />} />
                  <SocialLink href="mailto:moksh.shah.mps@gmail.com" icon={<IconMailSpark size={20} />} /> */}

                  {/* Github */}
                  <LinkPreview url="https://github.com/MokshPShah">
                    <div
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <IconBrandGithub className="h-4 w-4" />
                    </div>
                  </LinkPreview>

                  {/* Whatsapp */}
                  <LinkPreview
                    url="https://wa.me/9427390651?text=Hi%20I%20want%20to%20more%20about%20this!"
                    isStatic
                    imageSrc="/whatsapp-screenshot.png"
                    className="font-bold text-green-500"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                      <IconBrandWhatsapp className="w-5 h-5 text-white" />
                    </div>
                  </LinkPreview>

                  {/* linkedin */}
                  <LinkPreview
                    url="https://linkedin.com/in/me-moksh"
                    isStatic
                    imageSrc="/linkedin-screenshot.png"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-pink-500">
                    <div
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <IconBrandLinkedin className="h-4 w-4" />
                    </div>
                  </LinkPreview>

                  {/* Mail */}
                  <LinkPreview
                    url="mailto:moksh.shah.mps@gmail.com"
                    isStatic
                    imageSrc="/gmail-screenshot.png"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-pink-500"
                  >
                    {/* Note: We use a div here instead of Link to avoid the <a> inside <a> error */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                      <IconMailSpark className="w-5 h-5 text-white" />
                    </div>
                  </LinkPreview>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form with Validation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-500 h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-400">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400 font-medium ml-1">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400 font-medium ml-1">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-neutral-400 font-medium ml-1">Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="Project Inquiry"
                    className={`w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.subject ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs ml-1">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-neutral-400 font-medium ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs ml-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

// Helper Component for Social Links
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
    >
      {icon}
    </Link>
  )
}