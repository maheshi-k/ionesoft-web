import {
  TrendingUp,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  Award,
} from "lucide-react";

export const careerData = {
  hero: {
    eyebrow: "Join Our Team",
    title: "Build the Future with",
    highlight: "iOneSoft Solutions",

    description:
      "Join a passionate team of innovators, developers, and problem-solvers dedicated to delivering smart technology solutions that empower businesses worldwide.",

    backgroundImage: "/images/career/heroBg.webp",
    image: "/images/career/hero-side.webp",

    primaryButton: {
      text: "View Open Positions",
      href: "#open-positions",
    },

    secondaryButton: {
      text: "Learn More",
      href: "#why-work",
    },
  },

  whyWork: {
    eyebrow: "Why Work With Us",

    title: "Grow, Innovate, and Make an Impact",

    description:
      "At iOneSoft Solutions, we believe our people are our greatest strength.",

    cards: [
      {
        title: "Career Growth Opportunities",
        description:
          "Continuous learning, mentorship, and clear career progression.",
        icon: TrendingUp,
      },

      {
        title: "Innovative Projects",
        description: "Work on AI, Cloud, IoT and enterprise applications.",
        icon: Lightbulb,
      },

      {
        title: "Collaborative Environment",
        description: "Supportive culture that values teamwork and creativity.",
        icon: Users,
      },

      {
        title: "Continuous Learning",
        description: "Training, workshops and certifications.",
        icon: BookOpen,
      },

      {
        title: "Global Exposure",
        description: "Work with clients across multiple industries.",
        icon: Globe,
      },
    ],
  },

  positions: {
    eyebrow: "Open Positions",

    title: "Current Opportunities",

    jobs: [
      {
        title: "Internships",
        type: "Full Time",
        icon: Award,

        items: [
          "Software Engineering Interns",
          "Business Support Interns",
          "UI/UX Design Interns",
        ],

        buttonText: "Apply Now",
        buttonHref: "mailto:info@ionesoftsolutions.com",
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Future With Us?",

    description:
      "Let's build something great together. Our team is ready to help you take the next step.",

    image: "/images/career/footer-bg.webp",

    button: {
      text: "Contact Us",
      href: "mailto:info@ionesoftsolutions.com",
    },
  },
};
