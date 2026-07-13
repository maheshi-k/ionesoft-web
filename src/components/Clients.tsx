import Image from "next/image";
import { clients } from "../data/clients";

export default function Clients() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold uppercase">
          Trusted By Leading Brands
        </h2>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
