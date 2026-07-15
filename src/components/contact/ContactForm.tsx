import { contactData } from "@/src/data/contact";

export default function ContactForm() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">Let's Get In Touch</h1>

      <p className="mt-2 text-gray-500">
        Or just reach out manually to{" "}
        <span className="text-[var(--primary-text)]">
          info@ionesoftsolutions.com
        </span>
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            placeholder="First Name"
            className="rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
          />

          <input
            placeholder="Last Name"
            className="rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
          />

          <input
            placeholder="Phone Number"
            className="rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {contactData.form.fields.service}
          </label>

          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
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
        </div>

        <textarea
          rows={6}
          placeholder="Message"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-[#78B62A]"
        />

        <button className="w-full rounded-lg bg-[var(--primary-bg)] py-4 font-semibold text-white transition hover:bg-[#649B27]">
          Submit Form
        </button>
      </form>
    </div>
  );
}
