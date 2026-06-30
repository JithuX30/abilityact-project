"use client";

import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const PARTNERSHIP_TYPES = [
  "Referral partnership",
  "Joint programme",
  "Funding or sponsorship",
  "Community collaboration",
  "Not sure yet",
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
  "w-full h-11 px-4 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#2A7A4B] transition-colors";
const INPUT_OK = "border-[#E8E4F0] bg-white hover:border-[#8B8699]";
const INPUT_ERR = "border-red-400 bg-red-50";

export default function PartnerForm() {
  const [fields, setFields] = useState({
    orgName: "",
    contactName: "",
    email: "",
    partnershipType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef(null);

  const set = (key, val) => setFields((f) => ({ ...f, [key]: val }));

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
          We will be in touch within 5 working days to discuss how we might
          work together.
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Partnership enquiry form"
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

      {/* Organisation name */}
      <div>
        <label
          htmlFor="prt-orgName"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Organisation name{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="prt-orgName"
          type="text"
          autoComplete="organization"
          value={fields.orgName}
          onChange={(e) => set("orgName", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.orgName}
          aria-describedby={errors.orgName ? "err-prt-orgName" : undefined}
          className={`${INPUT_BASE} ${errors.orgName ? INPUT_ERR : INPUT_OK}`}
          placeholder="e.g. Hillingdon Community Trust"
        />
        <FieldError id="err-prt-orgName" message={errors.orgName} />
      </div>

      {/* Contact name */}
      <div>
        <label
          htmlFor="prt-contactName"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Contact name{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="prt-contactName"
          type="text"
          autoComplete="name"
          value={fields.contactName}
          onChange={(e) => set("contactName", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.contactName}
          aria-describedby={errors.contactName ? "err-prt-contactName" : undefined}
          className={`${INPUT_BASE} ${errors.contactName ? INPUT_ERR : INPUT_OK}`}
          placeholder="Your full name"
        />
        <FieldError id="err-prt-contactName" message={errors.contactName} />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="prt-email"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Email address{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="prt-email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-prt-email" : undefined}
          className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK}`}
          placeholder="you@organisation.org.uk"
        />
        <FieldError id="err-prt-email" message={errors.email} />
      </div>

      {/* Partnership type */}
      <div>
        <label
          htmlFor="prt-type"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Type of partnership
        </label>
        <select
          id="prt-type"
          value={fields.partnershipType}
          onChange={(e) => set("partnershipType", e.target.value)}
          className={`${INPUT_BASE} ${INPUT_OK}`}
        >
          <option value="">Select a type</option>
          {PARTNERSHIP_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="prt-message"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Message{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="prt-message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-prt-message" : "prt-message-hint"}
          className={`w-full px-4 py-3 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#2A7A4B] transition-colors resize-none ${
            errors.message ? INPUT_ERR : INPUT_OK
          }`}
          placeholder="Tell us about your organisation and what kind of collaboration you have in mind"
        />
        <p id="prt-message-hint" className="mt-1 text-xs text-[#8B8699]">
          A brief overview is fine — we will explore the detail together.
        </p>
        <FieldError id="err-prt-message" message={errors.message} />
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
            aria-describedby={errors.consent ? "err-prt-consent" : undefined}
            className="mt-0.5 w-4 h-4 rounded border-[#8B8699] text-[#2A7A4B] focus:ring-[#2A7A4B] focus:ring-offset-0 shrink-0"
          />
          <span className="text-sm text-[#524D63] leading-relaxed">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-[#2A7A4B] underline">
              privacy policy
            </a>{" "}
            and consent to AbilityAction CIC storing my contact details in order
            to respond to my enquiry.{" "}
            <span aria-hidden="true" className="text-red-600">*</span>
          </span>
        </label>
        <FieldError id="err-prt-consent" message={errors.consent} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="h-12 px-8 bg-[#2A7A4B] text-white font-medium rounded-lg hover:bg-[#226040] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] focus-visible:ring-offset-2"
      >
        Send enquiry
      </button>
    </form>
  );
}
