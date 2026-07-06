"use client";

import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const ROLE_OPTIONS = [
  "Befriending volunteer",
  "Employment advisor volunteer",
  "Community outreach volunteer",
  "BSL support volunteer",
  "Not sure yet",
];

const AVAILABILITY_OPTIONS = [
  "Weekday daytime",
  "Weekday evening",
  "Weekend",
  "Flexible",
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

export default function VolunteerForm() {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    availability: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef(null);

  const set = (key, val) => setFields((f) => ({ ...f, [key]: val }));

  const validate = () => {
    const e = {};
    if (!fields.fullName.trim()) e.fullName = "Full name is required.";
    if (!fields.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
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
          Application received — thank you!
        </h2>
        <p className="text-[#524D63] leading-relaxed">
          We will be in touch within 5 working days to discuss the next steps.
          We look forward to welcoming you to the team.
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Volunteer interest form"
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

      {/* Full name */}
      <div>
        <label
          htmlFor="vol-fullName"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Full name{" "}
          <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="vol-fullName"
          type="text"
          autoComplete="name"
          value={fields.fullName}
          onChange={(e) => set("fullName", e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "err-vol-fullName" : undefined}
          className={`${INPUT_BASE} ${errors.fullName ? INPUT_ERR : INPUT_OK}`}
          placeholder="Your full name"
        />
        <FieldError id="err-vol-fullName" message={errors.fullName} />
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="vol-email"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Email address{" "}
            <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="vol-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-vol-email" : undefined}
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK}`}
            placeholder="you@example.com"
          />
          <FieldError id="err-vol-email" message={errors.email} />
        </div>
        <div>
          <label
            htmlFor="vol-phone"
            className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
          >
            Phone{" "}
            <span className="font-normal text-[#8B8699]">(optional)</span>
          </label>
          <input
            id="vol-phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={`${INPUT_BASE} ${INPUT_OK}`}
            placeholder="020 7123 4567"
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label
          htmlFor="vol-role"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Area of interest
        </label>
        <select
          id="vol-role"
          value={fields.role}
          onChange={(e) => set("role", e.target.value)}
          className={`${INPUT_BASE} ${INPUT_OK}`}
        >
          <option value="">Select a role</option>
          {ROLE_OPTIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Availability */}
      <div>
        <label
          htmlFor="vol-availability"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Availability
        </label>
        <select
          id="vol-availability"
          value={fields.availability}
          onChange={(e) => set("availability", e.target.value)}
          className={`${INPUT_BASE} ${INPUT_OK}`}
        >
          <option value="">When are you usually free?</option>
          {AVAILABILITY_OPTIONS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="vol-message"
          className="block text-sm font-medium text-[#1F1B2E] mb-1.5"
        >
          Anything you would like to tell us?{" "}
          <span className="font-normal text-[#8B8699]">(optional)</span>
        </label>
        <textarea
          id="vol-message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          rows={4}
          aria-describedby="vol-message-hint"
          className={`w-full px-4 py-3 rounded-xl border text-[#1F1B2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#2A7A4B] transition-colors resize-none ${INPUT_OK}`}
          placeholder="Tell us a bit about yourself and why you would like to volunteer"
        />
        <p id="vol-message-hint" className="mt-1 text-xs text-[#8B8699]">
          A few sentences is plenty — we will ask for more at the interview stage.
        </p>
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
            aria-describedby={errors.consent ? "err-vol-consent" : undefined}
            className="mt-0.5 w-4 h-4 rounded border-[#8B8699] text-[#2A7A4B] focus:ring-[#2A7A4B] focus:ring-offset-0 shrink-0"
          />
          <span className="text-sm text-[#524D63] leading-relaxed">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-[#2A7A4B] underline">
              privacy policy
            </a>{" "}
            and consent to AbilityAction CIC storing my contact details in order
            to follow up on my volunteer interest.{" "}
            <span aria-hidden="true" className="text-red-600">*</span>
          </span>
        </label>
        <FieldError id="err-vol-consent" message={errors.consent} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="h-12 px-8 bg-[#2A7A4B] text-white font-medium rounded-lg hover:bg-[#226040] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] focus-visible:ring-offset-2"
      >
        Send application
      </button>
    </form>
  );
}
