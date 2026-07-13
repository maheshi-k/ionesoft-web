import Image from "next/image";
import ContactForm from "./ContactForm";
import { contactData } from "@/src/data/contact";

export default function ContactHero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Image
          src={contactData.hero.image}
          alt="Office"
          width={700}
          height={750}
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>

      <ContactForm />
    </section>
  );
}
