import { Mail, MapPin, Phone } from "lucide-react";
import { contactData } from "@/src/data/contact";

export default function ContactInfo() {
  return (
    <section className="mt-20 grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="mb-6 text-3xl font-bold">Visit Us</h2>

        <div className="space-y-8">
          {contactData.visit.locations.map((location) => (
            <div key={location.country}>
              <h3 className="font-semibold text-[var(--primary-text)]">
                {location.country}
              </h3>

              <div className="mt-3 flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[var(--primary-text)]" />

                <p className="leading-7 text-gray-600">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>

        <div className="space-y-10">
          {contactData.contact.locations.map((location) => (
            <div key={location.country}>
              <h3 className="font-semibold text-[var(--primary-text)]">
                {location.country}
              </h3>

              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--primary-text)]" />
                  <span>{location.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--primary-text)]" />
                  <span>{location.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
