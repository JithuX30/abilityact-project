"use client";

import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const SECTORS = [
  "Healthcare",
  "Retail",
  "Public sector",
  "Technology",
  "Education",
  "Finance",
  "Other",
];

const INTERESTS = [
  "Diversity and inclusion training",
  "Workplace accessibility audit",
  "Supported placements",
  "Sign language awareness workshop",
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
  "w-full h-11 px-4 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] transition-colors";
const INPUT_OK = "border-[#E8E4F0] bg-white hover:border-[#8B8699]";
const INPUT_ERR = "border-red-400 bg-red-50";

export default function EnquiryForm() {
  const [fields, setFields] = useState({
    orgName: "",
    contactName: "",
    email: "",
    phone: "",
    sector: "",
    interests: [],
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef(null);

  const set = (key, val) =>
    setFields((f) => ({ ...f, [key]: val }));

  const toggleInterest = (interest) =>
    setFields((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }));

  const validate = () => {
    const e = {};
    if (!fields.orgName.trim()) e.orgName = "Organisation name is required.";
    if (!fields.contactName.trim()) e.contactName = "Contact name is required.";
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
      // Move focus to error summary for screen readers
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
          Enquiry received — thank you!
        </h2>
        <p className="text-[#524D63] leading-relaxed">
          We will be in touch within 2 working days. If you need to reach us
          sooner, call{" "}
          <a href="tel:+442071234567" className="text-[#E07856] underline">
            020 7123 4567
          </a>{" "}
          or email{" "}
          <a
            href="mailto:employers@abilityaction.org.uk"
            className="text-[#E07856] underline"
          >
            employers@abilityaction.org.uk
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
      aria-label="Employer enquiry form"
      className="space-y-5"
    >
      <p className="text-xs text-[#8B8699]">
        Fields marked{" "}
        <span aria-hidden="true" className="text-red-600 font-bold">
          *
        </span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {/* Error summary */}
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

      {/* Organisation name */}
      <div>
        <label
          htmlFor="enq-orgName"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Organisation name{" "}
          <span aria-hidden="true" className="text-red-600">
            *
          </span>
        </label>
        <input
          id="enq-orgName"
          type="text"
          autoComplete="organization"
          value={fields.orgName}
          onChange={(e) => set("orgName", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.orgName}
          aria-describedby={errors.orgName ? "err-orgName" : undefined}
          className={`${INPUT_BASE} ${errors.orgName ? INPUT_ERR : INPUT_OK}`}
          placeholder="e.g. Acme Healthcare Ltd"
        />
        <FieldError id="err-orgName" message={errors.orgName} />
      </div>

      {/* Contact name */}
      <div>
        <label
          htmlFor="enq-contactName"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Contact name{" "}
          <span aria-hidden="true" className="text-red-600">
            *
          </span>
        </label>
        <input
          id="enq-contactName"
          type="text"
          autoComplete="name"
          value={fields.contactName}
          onChange={(e) => set("contactName", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.contactName}
          aria-describedby={errors.contactName ? "err-contactName" : undefined}
          className={`${INPUT_BASE} ${errors.contactName ? INPUT_ERR : INPUT_OK}`}
          placeholder="Your full name"
        />
        <FieldError id="err-contactName" message={errors.contactName} />
      </div>

      {/* Email + Phone row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enq-email"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Email address{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
          </label>
          <input
            id="enq-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK}`}
            placeholder="you@organisation.com"
          />
          <FieldError id="err-email" message={errors.email} />
        </div>

        <div>
          <label
            htmlFor="enq-phone"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Phone{" "}
            <span className="font-normal text-[#8B8699]">(optional)</span>
          </label>
          <input
            id="enq-phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={`${INPUT_BASE} ${INPUT_OK}`}
            placeholder="020 7123 4567"
          />
        </div>
      </div>

      {/* Sector */}
      <div>
        <label
          htmlFor="enq-sector"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Sector
        </label>
        <select
          id="enq-sector"
          value={fields.sector}
          onChange={(e) => set("sector", e.target.value)}
          className={`${INPUT_BASE} ${INPUT_OK}`}
        >
          <option value="">Select your sector</option>
          {SECTORS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Interests */}
      <fieldset>
        <legend className="text-sm font-medium text-[#1F1B2E] mb-3">
          What are you interested in?
        </legend>
        <div className="space-y-2.5">
          {INTERESTS.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={fields.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="w-4 h-4 rounded border-[#8B8699] text-[#E07856] focus:ring-[#E07856] focus:ring-offset-0 shrink-0"
              />
              <span className="text-sm text-[#524D63] group-hover:text-[#1F1B2E]">
                {interest}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label
          htmlFor="enq-message"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Message{" "}
          <span aria-hidden="true" className="text-red-600">
            *
          </span>
        </label>
        <textarea
          id="enq-message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "err-message" : "enq-message-hint"
          }
          className={`w-full px-4 py-3 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] transition-colors resize-none ${
            errors.message ? INPUT_ERR : INPUT_OK
          }`}
          placeholder="Tell us a bit about your organisation and what you are hoping to achieve"
        />
        <p id="enq-message-hint" className="mt-1 text-xs text-[#8B8699]">
          A few sentences is plenty — we will ask for more detail during our
          consultation.
        </p>
        <FieldError id="err-message" message={errors.message} />
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
            aria-describedby={errors.consent ? "err-consent" : undefined}
            className="mt-0.5 w-4 h-4 rounded border-[#8B8699] text-[#E07856] focus:ring-[#E07856] focus:ring-offset-0 shrink-0"
          />
          <span className="text-sm text-[#524D63] leading-relaxed">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-[#E07856] underline">
              privacy policy
            </a>{" "}
            and consent to AbilityAction CIC storing my contact details in order
            to respond to my enquiry.{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
          </span>
        </label>
        <FieldError id="err-consent" message={errors.consent} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="h-12 px-8 bg-[#C0532F] text-white font-medium rounded-lg hover:bg-[#A8421F] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0532F] focus-visible:ring-offset-2"
      >
        Send enquiry
      </button>
    </form>
  );
}
