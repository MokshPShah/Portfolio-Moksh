"use client";
import React, { useState } from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMailSpark } from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";

export default function ContactContent() {
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

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] antialiased bg-grid-white/[0.02] relative pb-24">

      {/* 1. HEADER (LAMP EFFECT) */}
      <LampContainer className="pt-36 h-[40vh] md:h-[50vh]">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-white via-blue-100 to-[#3B82F6] py-4 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent md:text-8xl"
        >
          Let's Connect.
        </motion.h1>
      </LampContainer>

      {/* 2. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to build <br className="hidden lg:block" />
              <span className="text-[#3B82F6]">something great?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              I am currently looking for <span className="text-white font-medium">full-time opportunities</span> or <span className="text-white font-medium">freelance projects</span>.
              Whether you have a question, a project idea, or just want to say hi, my inbox is open!
            </p>

            <div className="space-y-8">

              {/* Email Bento Card */}
              <div className="group flex items-center gap-5 p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#3B82F6]/30 hover:bg-[#111827]/80 transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center border border-[#3B82F6]/20 group-hover:scale-110 transition-transform duration-300">
                  <IconMailSpark className="text-[#3B82F6]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium mb-1">Direct Email</p>
                  <a href="mailto:moksh.shah.mps@gmail.com" className="text-lg text-white font-semibold hover:text-[#3B82F6] transition-colors cursor-pointer">
                    moksh.shah.mps@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links Area */}
              <div className="pt-8">
                <p className="text-neutral-500 text-sm font-medium mb-5 uppercase tracking-widest">Connect on Socials</p>
                <div className="flex flex-wrap gap-4">

                  {/* Github */}
                  <LinkPreview url="https://github.com/MokshPShah">
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl border border-white/5 bg-[#111827] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                      <IconBrandGithub size={24} />
                    </div>
                  </LinkPreview>

                  {/* LinkedIn */}
                  <LinkPreview
                    url="https://linkedin.com/in/me-moksh"
                    isStatic
                    imageSrc="/linkedin-screenshot.png"
                  >
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl border border-white/5 bg-[#111827] text-neutral-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                      <IconBrandLinkedin size={24} />
                    </div>
                  </LinkPreview>

                  {/* Whatsapp */}
                  <LinkPreview
                    url="https://wa.me/9427390651?text=Hi%20I%20want%20to%20more%20about%20this!"
                    isStatic
                    imageSrc="/whatsapp-screenshot.png"
                  >
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl border border-white/5 bg-[#111827] text-neutral-400 hover:text-[#25D366] hover:border-[#25D366]/30 hover:bg-[#25D366]/10 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                      <IconBrandWhatsapp size={24} />
                    </div>
                  </LinkPreview>

                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-[#111827] border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#3B82F6]/20 blur-[100px] rounded-full pointer-events-none" />

            {isSuccess ? (
              // SUCCESS STATE
              <div className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
                <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-emerald-500 h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Message Sent!</h3>
                <p className="text-neutral-400 text-lg">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              // FORM STATE
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400 font-medium ml-1">Your Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-[#0A0A0A] border rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all ${errors.name ? 'border-red-500/50' : 'border-white/5'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs ml-1 font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400 font-medium ml-1">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full bg-[#0A0A0A] border rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all ${errors.email ? 'border-red-500/50' : 'border-white/5'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs ml-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-neutral-400 font-medium ml-1">Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="Freelance Project Inquiry"
                    className={`w-full bg-[#0A0A0A] border rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all ${errors.subject ? 'border-red-500/50' : 'border-white/5'}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs ml-1 font-medium">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-neutral-400 font-medium ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`w-full bg-[#0A0A0A] border rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/5'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs ml-1 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3B82F6] text-white font-bold py-4 rounded-xl hover:bg-[#2563EB] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-pointer mt-4"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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