import { BriefcaseBusiness, Users, Link2, Headset } from "lucide-react";

interface StatCardProps {
  title: string;
}

export default function StatCard({ title }: StatCardProps) {
  const getIcon = () => {
    switch (title) {
      case "Industry Expertise":
        return (
          <BriefcaseBusiness size={28} className="text-[var(--primary-text)]" />
        );

      case "Skilled Development Team":
        return <Users size={28} className="text-[var(--primary-text)]" />;

      case "Strong Partnerships":
        return <Link2 size={28} className="text-[var(--primary-text)]" />;

      case "Quick & Local Support":
        return <Headset size={28} className="text-[var(--primary-text)]" />;

      default:
        return (
          <BriefcaseBusiness size={28} className="text-[var(--primary-text)]" />
        );
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-2 transition-all duration-300 hover:translate-x-1">
      <div className="flex h-10 w-10 items-center justify-center">
        {getIcon()}
      </div>

      <h1 className="text-lg text-left font-semibold text-gray-900">{title}</h1>
    </div>
  );
}
