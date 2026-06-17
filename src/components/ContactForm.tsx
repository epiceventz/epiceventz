"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const eventTypes = [
  "Corporate Event",
  "Conference",
  "Concert",
  "Cultural Event",
  "Community Event",
  "Nonprofit Event",
  "Trade Show",
  "Product Launch"
];

const budgets = ["Under $10k", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

const inputClass =
  "focus-ring min-h-12 w-full rounded-md border border-white/12 bg-white/[0.055] px-4 text-sm text-white placeholder:text-white/36 transition focus:border-electric/70";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your inquiry right now.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Your inquiry has been sent to the Epic Eventz team.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your inquiry right now.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glow md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Name
          <input className={inputClass} name="name" type="text" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Email
          <input className={inputClass} name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Phone
          <input className={inputClass} name="phone" type="tel" placeholder="(555) 000-0000" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Company
          <input className={inputClass} name="company" type="text" placeholder="Organization name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Event Type
          <select className={inputClass} name="eventType" defaultValue="" required>
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Event Date
          <input className={inputClass} name="eventDate" type="date" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Event Location
          <input className={inputClass} name="eventLocation" type="text" placeholder="City, venue, or TBD" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Budget
          <select className={inputClass} name="budget" defaultValue="" required>
            <option value="" disabled>
              Select budget range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/78">
        Message
        <textarea
          className={`${inputClass} min-h-36 resize-y py-4`}
          name="message"
          placeholder="Tell us about your goals, audience, venue, timeline, and production needs."
          required
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring min-h-12 rounded-md border border-gold bg-gold px-5 text-sm font-bold text-carbon shadow-gold transition hover:bg-gold-soft"
      >
        {status === "submitting" ? "Submitting..." : "Submit Event Inquiry"}
      </button>
      {message ? (
        <p
          className={`rounded-md border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-100"
              : "border-red-400/35 bg-red-400/10 text-red-100"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
