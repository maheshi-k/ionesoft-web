import { Target, Eye, HeartHandshake } from "lucide-react";
import { aboutValues } from "../../data/about";

const icons = [
  <Target key="mission" size={28} />,
  <Eye key="vision" size={28} />,
  <HeartHandshake key="values" size={28} />,
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-10 lg:py-15">
      <div className="mx-auto max-w-7xl px-6 center">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-lg md:text-xl lg:text-[20px] text-[var(--primary-text)] font-semibold uppercase tracking-wide mb-4">
            Our Values
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            The Principles That Drive Everything We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At iOneSoft Solutions, we are committed to delivering innovative
            technology solutions while maintaining the highest standards of
            integrity, collaboration, and customer success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-200 bg-[#F7F8F5] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#649B27] hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary-bg)]/10 text-[#649B27] transition-all duration-300 group-hover:bg-[#649B27] group-hover:text-white">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-gray-600 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
