export type HeroSection = {
  badge: string;
  title: {
    line1: string;
    line2: string;
    highlight: string;
  };
  description: string;
  primaryButton: {
    label: string;
    url: string;
  };
  secondaryButton: {
    label: string;
    url: string;
  };
};
