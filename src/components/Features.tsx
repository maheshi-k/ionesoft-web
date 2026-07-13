import Image from "next/image";
import heroImg from "../../public/images/hero.webp";
import { features } from "../data/features";

export default function Features() {
  return (
    <section className="relative bg-white pb-20">
      {/* Hero Image */}
      <div className="relative h-[450px] md:h-[380px] w-full">
        <Image
          src={heroImg}
          alt="Office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Card */}
      <div className="relative z-10 max-w-6xl mx-auto -mt-40 md:-mt-20 px-6">
        <div className="bg-white rounded-[30px] shadow-[0_8px_25px_rgba(0,0,0,0.12)] py-12 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-[#e7f0d7] flex items-center justify-center mb-6">
                    <Icon className="text-green-600" size={38} />
                  </div>

                  <h1 className="text-xl font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h1>

                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
