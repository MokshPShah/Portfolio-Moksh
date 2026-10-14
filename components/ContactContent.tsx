"use client";
import { useState } from "react";
import { profile } from "@/lib/content";
import { Container } from "@/components/blocks";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export default function ContactContent() {
  const [form, setForm] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Fields]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next: Partial<Fields> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (form.subject.trim().length < 3) next.subject = "A few words is enough.";
    if (form.message.trim().length < 10) next.message = "Tell me a little more (10 characters or so).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setForm(empty);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const channels = [
    { label: "Email", text: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", text: "linkedin.com/in/me-moksh", href: profile.linkedin },
    { label: "GitHub", text: "github.com/MokshPShah", href: profile.github },
    { label: "WhatsApp", text: "+91 94273 90651", href: profile.whatsapp },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 gap-x-16 gap-y-14 pt-14 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-5">
          <h1 className="text-4xl font-medium tracking-tight md:text-[56px] md:leading-[1.05]">Contact</h1>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-muted">
            Questions about my work, a role, or a freelance project? Use the form or reach me
            directly.
          </p>
          <ul className="mt-10 border-b border-line">
            {channels.map((c) => (
              <li key={c.label} className="border-t border-line">
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-between gap-4 py-3.5 hover:text-accent"
                >
                  <span className="break-all">{c.text}</span>
                  <span className="shrink-0 text-sm text-muted">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="glass rounded-lg p-6 md:p-9">
            {status === "sent" ? (
              <div role="status" className="py-10">
                <p className="text-2xl font-medium tracking-tight">Thanks, your message is on its way.</p>
                <p className="mt-2 text-muted">I&apos;ll reply to the email address you gave.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[15px] text-accent underline decoration-1 underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} autoComplete="name" />
                  <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} autoComplete="email" />
                </div>
                <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={handleChange} />
                <Field label="Message" name="message" value={form.message} error={errors.message} onChange={handleChange} multiline />

                {status === "failed" && (
                  <p className="text-sm text-red-700" role="alert">
                    The message didn&apos;t send. Please try again, or email me at {profile.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-md bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition-transform active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  multiline = false,
  autoComplete,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const cls = `w-full rounded-md border bg-surface/70 px-3 py-2.5 text-ink outline-none transition-colors focus:border-accent ${
    error ? "border-red-700" : "border-line"
  }`;
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea id={name} name={name} rows={6} value={value} onChange={onChange} aria-invalid={!!error} aria-describedby={describedBy} className={`${cls} resize-y`} />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={describedBy} className={cls} />
      )}
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
