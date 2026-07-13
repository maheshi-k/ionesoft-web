import { LucideIcon } from "lucide-react";

export interface CareerPage {
  hero: HeroSection;
  whyWork: WhyWorkSection;
  positions: PositionSection;
  cta: CTASection;
}

interface HeroSection {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton: {
    text: string;
    href: string;
  };
}

interface WhyWorkSection {
  eyebrow: string;
  title: string;
  description: string;

  cards: WhyWorkCard[];
}

interface WhyWorkCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface PositionSection {
  eyebrow: string;
  title: string;

  jobs: JobCard[];
}

interface JobCard {
  title: string;
  type: string;
  icon: LucideIcon;

  items: string[];

  buttonText: string;
  buttonHref: string;
}

interface CTASection {
  title: string;
  description: string;
  image: string;

  button: {
    text: string;
    href: string;
  };
}
