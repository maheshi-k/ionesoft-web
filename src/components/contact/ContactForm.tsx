"use client";

import { useState } from "react";
import type { ChangeEvent, ComponentProps, ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  Phone,
  SearchCheck,
  MessagesSquare,
  Lightbulb,
} from "lucide-react";
import { contactData } from "@/src/data/contact";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type FormSubmitEvent = Parameters<
  NonNullable<ComponentProps<"form">["onSubmit"]>
>[0];

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9\s()-]{7,20}$/;

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (formValues.firstName.trim().length < 2) {
      newErrors.firstName = "First name must contain at least 2 characters.";
    } else if (!namePattern.test(formValues.firstName.trim())) {
      newErrors.firstName = "Enter a valid first name.";
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (formValues.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must contain at least 2 characters.";
    } else if (!namePattern.test(formValues.lastName.trim())) {
      newErrors.lastName = "Enter a valid last name.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(formValues.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formValues.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formValues.service) {
      newErrors.service = "Please select a product or service.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    const fieldName = name as keyof FormValues;

    if (errors[fieldName]) {
      setErrors((previous) => ({
        ...previous,
        [fieldName]: undefined,
      }));
    }

    setIsSubmitted(false);
  };

  const handleSubmit = async (event: FormSubmitEvent) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formValues.firstName.trim(),
          lastName: formValues.lastName.trim(),
          email: formValues.email.trim(),
          phone: formValues.phone.trim(),
          service: formValues.service,
          message: formValues.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit the contact form.");
      }

      setIsSubmitted(true);
      setFormValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error("Unable to submit contact form:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (field: keyof FormValues) =>
    `w-full rounded-lg border px-4 py-3 outline-none transition ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-gray-300 focus:border-[#78B62A] focus:ring-2 focus:ring-[#78B62A]/15"
    }`;

  if (isSubmitted) {
    return (
      <div className="flex h-full flex-col justify-center">
        <div className="max-w-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-cover-bg)]">
            <CheckCircle2 className="h-7 w-7 text-[var(--primary)]" />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Thank you!
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We&apos;ve received your message. Our team will review your request
            and contact you shortly.
          </p>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              What happens next?
            </h2>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <SearchCheck className="h-5 w-5 text-[var(--primary)]" />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">
                    We review your request
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Our team will evaluate your requirements and identify the
                    most suitable solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <MessagesSquare className="h-5 w-5 text-[var(--primary)]" />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">
                    A consultant contacts you
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    One of our consultants will get in touch to understand your
                    business needs in more detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Lightbulb className="h-5 w-5 text-[var(--primary)]" />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">
                    We recommend the next steps
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    You&apos;ll receive guidance on the best approach, solution,
                    or implementation plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex justify-center rounded-lg bg-[var(--primary-bg)] px-7 py-3 font-semibold text-white transition hover:bg-[#649B27]"
            >
              Back to Home
            </Link>

            <Link
              href="/services"
              className="inline-flex justify-center rounded-lg border border-[var(--primary)] px-7 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary-cover-bg)]"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">
        Let&apos;s Get In Touch
      </h1>

      <p className="mt-2 text-gray-500">
        Or just reach out manually to{" "}
        <a
          href="mailto:info@ionesoftsolutions.com"
          className="text-[var(--primary-text)] hover:underline"
        >
          info@ionesoftsolutions.com
        </a>
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            id="firstName"
            label="First Name"
            error={errors.firstName}
            required
          >
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formValues.firstName}
              onChange={handleChange}
              placeholder="First Name"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              className={inputClassName("firstName")}
            />
          </FormField>

          <FormField
            id="lastName"
            label="Last Name"
            error={errors.lastName}
            required
          >
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={inputClassName("lastName")}
            />
          </FormField>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            id="email"
            label="Email Address"
            error={errors.email}
            required
          >
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email Address"
              autoComplete="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClassName("email")}
            />
          </FormField>

          <FormField
            id="phone"
            label="Phone Number"
            error={errors.phone}
            required
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClassName("phone")}
            />
          </FormField>
        </div>

        <FormField
          id="service"
          label={contactData.form.fields.service}
          error={errors.service}
          required
        >
          <select
            id="service"
            name="service"
            value={formValues.service}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClassName("service")}
          >
            <option value="" disabled>
              Select a product or service
            </option>

            {contactData.form.options.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.items.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </FormField>

        {/* No required prop, so no red star */}
        <FormField id="message" label="Message">
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formValues.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            maxLength={1000}
            className={`${inputClassName("message")} resize-y`}
          />

          <p className="mt-1 text-right text-xs text-gray-400">
            {formValues.message.length}/1000
          </p>
        </FormField>

        {submitError && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[var(--primary-bg)] py-4 font-semibold text-white transition hover:bg-[#649B27] focus:outline-none focus:ring-2 focus:ring-[#78B62A] focus:ring-offset-2"
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

function FormField({
  id,
  label,
  error,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
