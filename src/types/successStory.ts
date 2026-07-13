import { LucideIcon } from "lucide-react";

export interface SuccessStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface SuccessStory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  points: string[];
  stats: SuccessStat[];
}
