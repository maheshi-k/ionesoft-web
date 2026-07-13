function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <span className="font-semibold text-[#649B27]">{eyebrow}</span>
      )}

      <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}
