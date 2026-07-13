import Image from "next/image";
import { successStory } from "../../data/successStories";
import { CheckCircle2 } from "lucide-react";

export default function SuccessStory() {
    return (
        <section className="bg-white py-10 lg:py-15">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="font-semibold uppercase tracking-widest text-[var(--primary-text)]">
                        Our Success Story
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Real Results Delivered Through Smart Solutions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We help businesses solve operational challenges through smart,
                        scalable, and industry-focused technology solutions.
                    </p>
                </div>

                {/* Cards */}
                <div className="space-y-10">
                    {successStory.map((story, index) => {
                        const Icon = story.icon;

                        return (
                            <div
                                key={story.title}
                                className="overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F7F8F5] shadow-sm"
                            >
                                <div className="grid items-center gap-8 lg:grid-cols-12">
                                    {/* Content */}
                                    <div
                                        className={`p-3 lg:col-span-7 lg:p-8 ${index % 2 === 1 ? "lg:order-2" : ""
                                            }`}
                                    >
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary-bg)]/10 text-[#649B27]">
                                            <Icon size={32} />
                                        </div>

                                        <p className="font-semibold text-[var(--primary-text)]">
                                            {story.subtitle}
                                        </p>

                                        <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                                            {story.title}
                                        </h3>

                                        <p className="mt-5 leading-8 text-gray-600">
                                            {story.description}
                                        </p>

                                        <div className="mt-7 space-y-4">
                                            {story.points.map((point) => (
                                                <div key={point} className="flex gap-3">
                                                    <CheckCircle2
                                                        size={20}
                                                        className="mt-1 shrink-0 text-[var(--primary-text)]"
                                                    />
                                                    <span className="text-sm leading-7 text-gray-700">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                            {story.stats.map((stat) => {
                                                const StatIcon = stat.icon;

                                                return (
                                                    <div
                                                        key={stat.label}
                                                        className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                                                    >
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-bg)]/10 text-[#649B27]">
                                                            <StatIcon size={24} />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-2xl font-bold text-gray-900">
                                                                {stat.value}
                                                            </h4>
                                                            <p className="text-sm text-gray-600">
                                                                {stat.label}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className={`relative h-[320px] lg:col-span-5 lg:h-full lg:min-h-[480px] ${index % 2 === 1 ? "lg:order-1" : ""
                                            }`}
                                    >
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8F5] via-transparent to-transparent lg:hidden" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}