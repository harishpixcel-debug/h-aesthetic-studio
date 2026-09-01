"use client";
import { useState } from "react";
import { contact } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <div className="inquiry-wrap">
      <div className="inquiry-head">
        <div className="eyebrow">Start a Project</div>
        <h1 className="inquiry-title display">
          Tell us about<br /><em>the space.</em>
        </h1>
        <p className="inquiry-sub">
          Share what you&apos;re planning — we&apos;ll come back with an approach before anything gets drawn.
        </p>
        <div className="inquiry-contact">
          <a href={contact.phoneHref} className="link-arrow">
            {contact.phone} <span className="arrow">→</span>
          </a>
          <span className="inquiry-pending">Email — coming soon</span>
        </div>
      </div>

      {state === "success" ? (
        <div className="inquiry-success">
          <div className="eyebrow">Received</div>
          <p>Thank you — we&apos;ll be in touch shortly.</p>
        </div>
      ) : (
        <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+91 —" />
            </div>
            <div className="form-field">
              <label htmlFor="city">City / Location</label>
              <input id="city" name="city" type="text" placeholder="Mumbai, Pune..." />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="project_type">Project Type</label>
              <select id="project_type" name="project_type">
                <option value="">Select —</option>
                <option>Hotel</option>
                <option>Café</option>
                <option>Restaurant</option>
                <option>Co-working Office</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="area">Approximate Area</label>
              <input id="area" name="area" type="text" placeholder="sq.ft or sq.m" />
            </div>
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="brief">Brief</label>
            <textarea
              id="brief"
              name="brief"
              rows={5}
              placeholder="Tell us about the space, what you&apos;re planning and when you&apos;re looking to start."
            />
          </div>

          <div className="form-row form-row--end">
            {state === "error" && (
              <span className="form-error">Something went wrong — please try again or call us directly.</span>
            )}
            <button
              type="submit"
              className="link-arrow solid"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? "Sending..." : "Send Inquiry"}
            </button>
          </div>

          <p className="form-note">
            No commitment — this is just the beginning of a conversation.
          </p>
        </form>
      )}
    </div>
  );
}
