"use client";

import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const ENQUIRY_TYPES = [
  "General enquiry",
  "Employment support",
  "Employer enquiry",
  "Sign language services",
  "Volunteering",
  "Media",
  "Other",
];

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

const INPUT_BASE =
  "w-full h-11 px-4 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4E9E] transition-colors";
const INPUT_OK = "border-[#E8E4F0] bg-white hover:border-[#8B8699]";
const INPUT_ERR = "border-red-400 bg-red-50";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef(null);

  const set = (key, val) => setFields((f) => ({ ...f, [key]: val }));

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (!fields.message.trim()) e.message = "Message is required.";
    if (!fields.consent)
      e.consent = "Please accept the privacy policy to continue.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTimeout(() => summaryRef.current?.focus(), 50);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <CheckCircle2
          size={44}
          className="text-green-600 mx-auto mb-4"
          aria-hidden="true"
        />
        <h2
          className="text-xl font-semibold text-[#1F1B2E] mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Message sent — thank you!
        </h2>
        <p className="text-[#524D63] leading-relaxed">
          We will get back to you within 2 working days. For urgent matters,
          call us on{" "}
          <a href="tel:07933212547" className="text-[#6B4E9E] underline">
            07933 212547
          </a>
          .
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="space-y-5"
    >
      <p className="text-xs text-[#8B8699]">
        Fields marked{" "}
        <span aria-hidden="true" className="text-red-600 font-bold">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {hasErrors && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="bg-red-50 border border-red-200 rounded-xl p-4 focus:outline-none"
        >
          <p className="font-semibold text-red-800 text-sm mb-2">
            Please correct the following before sending:
          </p>
          <ul className="list-disc list-inside space-y-1">
            {Object.values(errors).map((msg) => (
              <li key={msg} className="text-sm text-red-700">
                {msg}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Name{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-contact-name" : undefined}
          className={`${INPUT_BASE} ${errors.name ? INPUT_ERR : INPUT_OK}`}
          placeholder="Your full name"
        />
        <FieldError id="err-contact-name" message={errors.name} />
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Email address{" "}
            <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-contact-email" : undefined}
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK}`}
            placeholder="you@example.com"
          />
          <FieldError id="err-contact-email" message={errors.email} />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Phone{" "}
            <span className="font-normal text-[#8B8699]">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={`${INPUT_BASE} ${INPUT_OK}`}
            placeholder="07933 212547"
          />
        </div>
      </div>

      {/* Enquiry type */}
      <div>
        <label
          htmlFor="contact-type"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          What is your enquiry about?
        </label>
        <select
          id="contact-type"
          value={fields.enquiryType}
          onChange={(e) => set("enquiryType", e.target.value)}
          className={`${INPUT_BASE} ${INPUT_OK}`}
        >
          <option value="">Select a topic</option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Message{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-contact-message" : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4E9E] transition-colors resize-none ${
            errors.message ? INPUT_ERR : INPUT_OK
          }`}
          placeholder="How can we help?"
        />
        <FieldError id="err-contact-message" message={errors.message} />
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={fields.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "err-contact-consent" : undefined}
            className="mt-0.5 w-4 h-4 rounded border-[#8B8699] text-[#6B4E9E] focus:ring-[#6B4E9E] focus:ring-offset-0 shrink-0"
          />
          <span className="text-sm text-[#524D63] leading-relaxed">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-[#6B4E9E] underline">
              privacy policy
            </a>{" "}
            and consent to AbilityAction CIC storing my contact details to
            respond to my message.{" "}
            <span aria-hidden="true" className="text-red-600">*</span>
          </span>
        </label>
        <FieldError id="err-contact-consent" message={errors.consent} />
      </div>

      <button
        type="submit"
        className="h-12 px-8 bg-[#6B4E9E] text-white font-medium rounded-lg hover:bg-[#8B6BC4] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
      >
        Send message
      </button>
    </form>
  );
}
