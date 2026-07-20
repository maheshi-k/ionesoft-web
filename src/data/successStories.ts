import {
  Building2,
  CheckCircle2,
  Hotel,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";

import { SuccessStory } from "../types/successStory";

export const successStory: SuccessStory[] = [
  {
    title: "Hotel Automation",
    subtitle: "SilverNeedle Hospitality Group",
    description:
      "SilverNeedle Hospitality Group was satisfied with iOneSoft project delivery for its swift agility and ability to meet timelines when no other vendors were able to do it.",
    image: "/images/about/sn.svg",
    icon: Hotel,
    stats: [
      {
        label: "Hotels Consolidated",
        value: "56+",
        icon: Building2,
      },
    ],
    points: [
      "Consolidated 56+ hotel sites into one platform",
      "Built booking engine and self check-in kiosk",
      "Delivered mobile app for hotels in Asia Pacific",
    ],
  },
  {
    title: "Guest Self Check-In Kiosks",
    subtitle: "End-to-End Kiosk Implementation",
    description:
      "First in Singapore to implement an operational end-to-end self check-in kiosk solution integrated with door lock systems, payment gateways, Hotel PMS, and OTAs.",
    image: "/images/about/sc.svg",
    icon: MonitorSmartphone,
    stats: [
      {
        label: "First in Singapore",
        value: "1",
        icon: Star,
      },
    ],
    points: [
      "Approved and recognized by Singapore Tourism Board",
      "Integrated with PMS, OTAs, and door locks",
      "Seamless payment and guest experience",
    ],
  },
];
