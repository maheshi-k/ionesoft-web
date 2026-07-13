import { ProductDetail } from "../types/productDetails";
import {
  FileText,
  Boxes,
  CircleCheck,
  MonitorSmartphone,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export const productDetails: Record<string, ProductDetail> = {
  clovatel: {
    title: "Hotel Management Solutions – CLOVATEL",
    subtitle: "Clovatel Hotel Management System and Mobile Check-In",
    heroImage: "/images/products/HMS-hero.webp",
    description:
      "A complete cloud-based hotel management solution designed to streamline operations and elevate guest experiences.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    secondaryButtonText: "Learn More",
    secondaryButtonHref: "https://www.clovatel.com/",

    sections: [
      {
        title: "Clovatel Hotel Management System",
        image: "/images/products/clv.webp",
        imagePosition: "left",

        description:
          "CLOVATEL is a cloud-based Property Management System (PMS) designed for hotels and hostels. It simplifies daily hotel operations including reservations, front office management, housekeeping, billing, online booking, guest check-in & checkout, room allocation, and integrated self-service kiosk with facial recognition. The platform provides an intuitive interface that improves operational efficiency while delivering a seamless guest experience.",

        features: [
          {
            title: "STAAH: Channel Manager & Booking Engine",
            icon: FileText,
          },
          {
            title: "Accounting / ERP Integration",
            icon: Boxes,
          },
          {
            title: "Rate Management",
            icon: Boxes,
          },
          {
            title: "Room Inventory Management",
            icon: Boxes,
          },
        ],
      },

      {
        eyebrow: "Trending Ways to Check-In",

        title: "Contactless, Smart & Seamless Check-In Experience",

        description:
          "CLOVATEL integrates contactless digital technologies with self-service kiosks, enabling guests to check in quickly with minimal staff interaction. Travelers can book rooms, select preferences, complete check-in, and make payments through the mobile application, delivering a faster and safer hotel experience.",

        media: {
          type: "image",
          src: "/images/products/Contactless-checkIn.webp",
        },

        imagePosition: "right",

        lists: [
          {
            title: "Features",
            items: [
              "F&B POS partner for your hotel restaurant",
              "Self-Service Kiosk",
              "Mobile Pre-arrival & Onsite Check-In / Checkout",
            ],
          },
        ],

        buttonCards: [
          {
            title: "Self Service Kiosk",
            href: "https://clovatel.com/software/self-service-kiosk",
            icon: MonitorSmartphone,
          },
          {
            title: "Mobile Services",
            href: "https://clovatel.com/software/hotel-self-service-app",
            icon: Smartphone,
          },
        ],
      },
    ],

    seo: {
      title: "Hotel Self Service Kiosk Check-In/Out Software",
      description:
        "Ionesoftsolutions Provides Self Service Kiosk Check-In/Out Software is an all-in-one which include Facial recognition, Payment Gateway Integration, Passport/ National ID scanner, Cash Collector and more",
      keywords: [
        "self service kiosk",
        "Hotel self service kiosk",
        "restaurant kiosks",
        "self check-in/out kiosk",
      ],
      canonical: "https://www.ionesoftsolutions.com/products/clovatel",
      robots: {
        index: false,
        follow: false,
      },
    },
  },

  leenira: {
    title: "SPA Management Solution – LEENIRA",
    subtitle: "Leenira Salon & Spa Management System",
    heroImage: "/images/products/leenira-hero.webp",
    description:
      "Empower your salon or spa with a modern cloud-based management system that streamlines appointments, automates daily operations, and delivers a seamless booking experience across web and mobile devices.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    secondaryButtonText: "Learn More",
    secondaryButtonHref: "https://leenira.com/",

    sections: [
      {
        title: "Leenira Salon & Spa Management System",
        image: "/images/products/leenira-subI.webp",
        imagePosition: "left",

        description:
          "Leenira is a cloud-based Salon & Spa Management System that simplifies appointment scheduling, customer management, inventory tracking, staff operations, and business reporting. The platform includes a web application, mobile application, and integrated salon website, enabling salon owners to manage their businesses efficiently from anywhere while improving customer satisfaction.",

        features: [
          {
            title: "Manage Client Engagement",
            icon: CheckCircle2,
          },
          {
            title: "Manage Inventory & Store Stock",
            icon: CheckCircle2,
          },
          {
            title: "Manage Client Reviews",
            icon: CheckCircle2,
          },
          {
            title: "Plan Loyalty Programs",
            icon: CheckCircle2,
          },
        ],
      },

      {
        eyebrow: "Complete Salon & Spa Management",

        title: "Simplify Appointments, Operations & Customer Experience",

        description:
          "Leenira's integrated online booking platform allows customers to search, select, and book salon or spa services anytime. Automated SMS and email notifications keep customers informed, while treatment history, appointment tracking, and package management create a seamless customer experience.",

        media: {
          type: "youtube",
          src: "",
        },

        imagePosition: "right",

        lists: [
          {
            title: "Key Features",
            items: [
              "Manage your salon website",
              "Online Appointment Management",
              "Appointment Scheduling",
            ],
          },
        ],
      },
    ],

    seo: {
      title:
        "Salon & Spa Software Booking System, Online Appointment Management",
      description:
        "Ionesoftsolutions Provides online Salon and Spa software portal for customers to search, select and book the salon services offered by the salons. Customers receives email and sms alerts on their bookings.",
      keywords: [
        "salon software",
        "spa software",
        "salon booking software",
        "salon management system",
      ],
      canonical:
        "https://www.ionesoftsolutions.com/ios/products/leenira-salon-spa-software",
      robots: {
        index: false,
        follow: false,
      },
    },
  },

  dms: {
    title: "Document Management Solution",
    subtitle: "Digital Document Solutions",
    heroImage: "/images/products/DMS-hero.webp",
    description:
      "A secure, cloud-based document management solution that helps businesses organize, store, manage, and retrieve documents efficiently. Streamline workflows, enhance collaboration, strengthen document security, and improve productivity with centralized access, version control, and automated document processes.",

    sections: [
      {
        title: "Knowledge Base",
        description:
          "Provide rich applications including multiple document management with multiple formats, Knowledge maps and mobile document management to support the enterprise’s activities in knowledge accumulation, sharing, utilization and innovation.",
        image: "/images/products/KB.webp",
        imagePosition: "left",
      },
      {
        title: "Content Engine",
        description:
          "Provide powerful document management support including multi-directory setting, document storage limitation, permission control, full-text search, security level control and information integration.",
        image: "/images/products/CE.webp",
        imagePosition: "right",
      },
      {
        title: "Version Control",
        description:
          "Enable efficient management of document workflow and revisions with complete version tracking, change history, rollback capabilities and update control.",
        image: "/images/products/VC.webp",
        imagePosition: "left",
      },
      {
        title: "Multi Language Support",
        description:
          "Support multiple languages across documents, workflows and user interfaces to enhance accessibility and collaboration.",
        image: "/images/products/MLS.webp",
        imagePosition: "right",
      },
      {
        title: "Ticket Tracking",
        description:
          "Track document-related tasks, approvals and workflow progress with clear visibility across every stage.",
        image: "/images/products/TT1.webp",
        imagePosition: "left",
      },
      {
        title: "e-Form Designer",
        image: "/images/products/E-F.webp",
        imagePosition: "right",
        lists: [
          {
            items: [
              "Fields/Templates",
              "Code/Image/Tips/QR Code",
              "Style/Format",
              "Excel-like Formulas",
              "Field Properties",
              "Tab Page",
              "Print Template",
            ],
          },
        ],
      },
      {
        title: "e-Workflow Designer",
        image: "/images/products/E-W.webp",
        imagePosition: "left",
        lists: [
          {
            items: [
              "Node",
              "Operator",
              "Conditions",
              "Business Rules",
              "Version Control",
              "Automated Testing",
              "Batch Edition",
              "Operation before/after node",
            ],
          },
        ],
      },
    ],
  },

  "Contactless-temp": {
    title: "Contactless Temperature And Facial Recognition (CTAF)",
    subtitle: "Smart Contactless Access & Health Screening",
    heroImage: "/images/products/CTF-Hero.webp",
    description:
      "A smart contactless solution that combines real-time temperature monitoring with advanced facial recognition to provide secure, hygienic, and efficient access control while improving safety and operational efficiency.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    sections: [
      {
        eyebrow: "AI Powered Visitor Screening",

        title: "Contactless Temperature & Facial Recognition",

        description:
          "CTAF provides intelligent contactless access control with real-time temperature detection, facial recognition, mask detection and visitor validation. Designed for offices, hotels, retail outlets and public facilities, it enables organizations to improve workplace safety while delivering a fast and seamless visitor experience.",

        media: {
          type: "image",
          src: "/images/products/CTAF-Sub.webp",
        },

        imagePosition: "left",

        lists: [
          {
            title: "Key Features",
            items: [
              "Contactless temperature detection",
              "Fever warning & mask detection",
              "Voice feedback & light indicator",
              "Liveness detection",
              "Face validation & recognition",
              "Ultra-low illumination sensor",
              "Whitelist / Blacklist management",
              "Self-registration visitor management",
            ],
          },
        ],
      },

      {
        eyebrow: "Smart Access Management",

        title: "Functions & Business Benefits",

        description:
          "Reduce manual visitor management while improving security and operational efficiency through centralized device management, intelligent data processing and comprehensive user administration.",

        image: "/images/products/Func-Bussiness.svg",
        imagePosition: "right",

        lists: [
          {
            title: "System Functions",
            items: [
              "System & Device Management",
              "Cloud & On-Premise Deployment",
              "Alert Configuration",
              "Search & Reporting",
              "Multi-location Management",
              "User Roles & Employee Matrix",
            ],
          },
          {
            title: "Business Advantages",
            items: [
              "Indoor & Outdoor Installation",
              "Reduce Visitor Waiting Time",
              "Automated Entry Records",
              "Access Control Integration",
              "Multi-language Support",
              "Supports Employees, Visitors & Contractors",
            ],
          },
        ],
      },

      {
        eyebrow: "Ideal Industries",

        title: "Business Areas",

        description:
          "Suitable for organizations requiring secure, touch-free visitor access and employee authentication across multiple industries.",

        image: "/images/products/Bussiness-area.webp",
        imagePosition: "left",

        lists: [
          {
            items: [
              "Office Buildings",
              "Residential Care Facilities",
              "Schools",
              "Retail Outlets & Salons",
            ],
          },
          {
            items: [
              "Industrial & Commercial Buildings",
              "Shopping Malls & Supermarkets",
              "Healthcare & Clinics",
              "Hotels",
            ],
          },
        ],
      },

      {
        eyebrow: "Device Information",

        title: "Technical Specifications ZY-D28-TW",

        description:
          "ZY-D28-TW is designed with advanced temperature scanning, facial recognition, access control integration and flexible installation support for safe and efficient entry management.",

        image: "/images/products/TS.webp",
        imagePosition: "left",

        lists: [
          {
            title: "Temperature Scanning Module",
            items: [
              "Measurement range: 28°C–46°C",
              "Measurement accuracy: ±0.3°C",
              "Measurement speed: ≤0.5s",
            ],
          },
          {
            title: "Facial Recognition Camera",
            items: [
              "2MP camera",
              "Anti-spoofing live detection",
              "Fast recognition speed: < 1.0s",
            ],
          },
          {
            title: "Device",
            items: [
              "7 inch touch screen",
              "1280 × 720 resolution",
              "Size: 226.5 × 120 × 33.5mm",
              "8GB storage",
              "Up to 20,000 registered users",
              "Ethernet port 10/100/1000Mbps RJ45 interface",
              "Operating voltage: DC12V ±10%",
              "RJ45 interface and USB",
              "CCC, CE, RoHS certified",
            ],
          },
          {
            title: "Installation",
            items: [
              "Wall mounting",
              "Desk stand",
              "Long stand",
              "Pen mounted",
              "Metal door",
              "Turnstile",
            ],
          },
        ],
      },
      {
        eyebrow: "Flexible Installation",

        title: "Mounting Options",
        image: "/images/products/Mount.webp",

        description:
          "CTAF supports multiple mounting options to suit different business environments, including reception desks, entrances, office access points and public facility checkpoints.",

        lists: [
          {
            title: "Table Top Variant",
            items: [
              "Compact tabletop design",
              "Ideal for reception counters and office entrances",
              "Easy installation and relocation",
            ],
          },
          {
            title: "Floor Standing Variant",
            items: [
              "Professional floor-standing setup",
              "Suitable for building entrances and high-traffic areas",
              "Stable and modern access control installation",
            ],
          },
        ],
      },
    ],

    seo: {
      title: "Contactless Temperature measurement Visitor Check-In Software",
      description:
        "Ionesoftsolutions Provides Contactless Temperature And Facial detection (CTAF) is smart, accurate, fast and safe to identify, accept or deter any visitors visiting the premises",
      keywords: [
        "touchless visitor management system",
        "contactless visitor management",
        "touchless visitor management",
        "contactless visitor management system",
        "contactless visitor management software",
      ],
      canonical:
        "https://ionesoftsolutions.com/ios/products/contactless-temperature-and-facial-recognition/",

      robots: {
        index: false,
        follow: false,
      },
    },
  },

  membership: {
    title: "Membership Management Software – Organicrm",
    subtitle: "Membership Management & Association Software",
    heroImage: "/images/products/MMS.webp",
    description:
      "A cloud-based membership management solution that helps organizations manage memberships, subscriptions, events, online registrations, payments, and member engagement through a single centralized platform.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    sections: [
      {
        eyebrow: "All-in-One Membership Platform",

        title: "Membership Management System",

        media: {
          type: "image",
          src: "/images/products/mm-1.webp",
        },

        imagePosition: "left",

        description:
          "Organicrm is a comprehensive membership management system designed for non-profit organizations, clubs, associations, and societies. It streamlines member subscriptions, online event registration, RSVP confirmations, payment processing, reporting, and communication while integrating seamlessly with your website.",

        lists: [
          {
            title: "Key Features",
            items: [
              "Track member subscriptions",
              "Automated renewal reminders",
              "Create and manage events",
              "Online RSVP confirmations",
              "Online registration and payment forms",
              "Email & broadcast communication",
              "Product sales for members",
              "Attendance tracking and reporting",
            ],
          },
        ],
      },

      {
        eyebrow: "Powerful Administration",

        title: "Core Functions",

        image: "/images/products/mm-2.webp",

        imagePosition: "right",

        description:
          "Organicrm provides dedicated modules for administrators, members, and event management, ensuring every aspect of membership administration is handled efficiently from a single platform.",

        lists: [
          {
            title: "Administrator",
            items: [
              "Add, Edit & Delete Members",
              "Manage Member Subscriptions",
              "Manage User Roles & Permissions",
              "Manage Membership Types",
            ],
          },
          {
            title: "Membership",
            items: [
              "Membership Applications",
              "Individual & Company Profiles",
              "Manage User Profiles",
              "Login History",
              "Subscription History",
            ],
          },
          {
            title: "Events",
            items: [
              "Create Events",
              "Invite Members",
              "Email & SMS Notifications",
              "Generate RSVP Numbers",
            ],
          },
        ],
      },

      {
        eyebrow: "Business Benefits",

        title: "Why Choose Organicrm?",

        image: "/images/products/mm-3.svg",

        imagePosition: "left",

        description:
          "Organicrm helps organizations reduce manual administration while improving communication, member engagement, event management, and subscription tracking through a secure cloud-based platform.",

        lists: [
          {
            title: "Benefits",
            items: [
              "Cloud-based membership management",
              "Automated subscription renewal alerts",
              "Integrated event & RSVP management",
              "Online registration & secure payments",
              "Customizable online forms",
              "Personalized email campaigns",
              "Centralized reporting & analytics",
              "Website integration",
              "Guest attendance tracking",
            ],
          },
        ],
      },
    ],

    seo: {
      title:
        "Membership Management Software | Association & Club Management System",
      description:
        "Cloud-based membership management software for clubs, associations, and non-profit organizations. Manage members, subscriptions, events, online registration, RSVP, payments, and reporting from one platform.",
      keywords: [
        "membership management software",
        "association management software",
        "club management software",
        "membership CRM",
        "membership subscription software",
        "event management software",
        "non profit membership system",
      ],
      canonical:
        "https://ionesoftsolutions.com/products/membership-management-software",

      robots: {
        index: false,
        follow: false,
      },
    },
  },

  D2C: {
    title: "Central IT Management – D2C",
    subtitle: "Centralized Device & Infrastructure Management",
    heroImage: "/images/products/D2C-hero.webp",

    description:
      "A centralized IT management platform that enables organizations to monitor, manage, and maintain kiosks, desktops, servers, mobile devices, and applications from a single dashboard, improving operational efficiency and reducing IT management complexity.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    sections: [
      {
        eyebrow: "Centralized IT Operations",

        title: "Monitor & Manage Your Entire IT Infrastructure",

        media: {
          type: "image",
          src: "/images/products/d2c-1.webp",
        },

        imagePosition: "left",

        description:
          "D2C Central IT Management provides a complete monitoring platform for IT administrators to centrally manage hardware devices, servers, web applications, kiosks, desktops, and mobile devices. Receive real-time alerts, monitor system availability, and quickly respond to incidents through a unified dashboard.",

        lists: [
          {
            title: "Platform Features",
            items: [
              "Centralized monitoring dashboard",
              "Real-time device health monitoring",
              "Server & application monitoring",
              "Email & SMS alert notifications",
              "Performance reporting",
              "Availability tracking",
            ],
          },
        ],
      },

      {
        eyebrow: "Device Management",

        title: "Manage Every Device From One Platform",

        image: "/images/products/d2c-5.svg",

        imagePosition: "right",

        description:
          "D2C provides dedicated management modules for kiosks, desktops, laptops, servers, smartphones, and tablets, allowing IT teams to manage distributed devices efficiently.",

        lists: [
          {
            title: "Management Areas",
            items: [
              "Kiosk Management",
              "Integrated Desktop Management",
              "Mobile Device & Tablet Management",
            ],
          },
        ],
      },

      {
        eyebrow: "Available Editions",

        title: "Flexible Deployment Editions",

        image: "/images/products/d2c-3.webp",

        imagePosition: "left",

        description:
          "Choose the edition that best matches your organization's infrastructure and operational requirements.",

        lists: [
          {
            title: "D2C Editions",
            items: [
              "Server Edition – Third-party service availability monitoring",
              "Kiosk Edition – iOS & Smart Kiosk management",
              "Desktop Edition – Desktops, Laptops & Server management",
              "Mobile Edition – Smartphones & Tablets management",
            ],
          },
        ],
      },

      {
        eyebrow: "Comprehensive Modules",

        title: "Everything IT Administrators Need",

        image: "/images/products/d2c-4.webp",

        imagePosition: "right",

        description:
          "D2C includes multiple integrated modules designed to simplify infrastructure management, software deployment, auditing, and system monitoring.",

        lists: [
          {
            title: "Available Modules",
            items: [
              "Admin Module",
              "Kiosk Module",
              "Desktop / Laptop / Server Module",
              "Smart Phone & Tablet Module",
              "Source Availability Module",
              "Audit Trail Module",
            ],
          },

          {
            title: "Administration",
            items: [
              "User Management",
              "Role & Permission Management",
              "System Settings",
            ],
          },

          {
            title: "Device Management",
            items: [
              "Configuration Management",
              "Software Deployment",
              "Patch Management",
              "Reporting & Analytics",
              "Remote Device Management",
            ],
          },

          {
            title: "Availability Monitoring",
            items: ["Machine Availability", "Service Availability"],
          },
        ],
      },
    ],

    seo: {
      title: "Central IT Management Software | Device Monitoring Platform",
      description:
        "Centralize the management of kiosks, desktops, laptops, servers, mobile devices, and IT services with D2C Central IT Management. Monitor availability, receive alerts, deploy software, and manage infrastructure from a single dashboard.",
      keywords: [
        "central IT management",
        "IT infrastructure monitoring",
        "device management software",
        "kiosk management software",
        "server monitoring software",
        "desktop management",
        "mobile device management",
        "IT monitoring dashboard",
      ],
      canonical:
        "https://www.ionesoftsolutions.com/products/central-it-management-d2c",

      robots: {
        index: false,
        follow: false,
      },
    },
  },

  eguestwishes: {
    title: "eGuestWishes",
    subtitle: "Digital Guest Wishes & Event Memory Platform",
    heroImage: "/images/products/eGuestWishes-hero.webp",
    description:
      "A digital guest wishes solution that allows guests to capture photos, record video messages, leave personalized wishes, and upload memories to social media for weddings, corporate events, sales events, and special occasions.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    sections: [
      {
        eyebrow: "Digital Event Memories",

        title: "Create Unforgettable Guest Experiences",

        media: {
          type: "image",
          src: "/images/products/eG-1.webp",
        },

        imagePosition: "left",

        description:
          "eGuestWishes helps you digitalize guest wishes for events by allowing guests to record videos, capture photos, and share memories online. It is ideal for weddings, corporate events, sales events, and opening ceremonies, creating a dynamic and memorable experience for every occasion.",

        lists: [
          {
            title: "Key Features",
            items: [
              "Guests can take photos and leave text messages",
              "Record video messages for special occasions",
              "Upload captured photos",
              "Upload pre-shot video clips",
              "Take on-site photos and record personal wishes",
              "Upload memories to Facebook",
            ],
          },
        ],
      },

      {
        eyebrow: "Alternative Wedding Guestbook",

        title: "Personalized Digital Guestbook Experience",

        description:
          "Instead of using a traditional signature album, eGuestWishes allows guests to sign a personalized digital guestbook with photos, videos, and heartfelt wishes. Photos and messages can be arranged into an online collage, creating a lasting memory for the couple or event host.",
      },

      {
        eyebrow: "Simple Event Setup",

        title: "All You Need Is a Touch Screen PC",

        image: "/images/products/eG-2.webp",

        description:
          "Set up a touch screen PC at your event and let guests create personalized memories with ease.",

        lists: [
          {
            items: [
              "Take Photo / Video",
              "Add personalized messages to photos or videos",
              "Upload to Facebook",
            ],
          },
        ],
      },
    ],

    seo: {
      title: "eGuestWishes | Digital Guestbook & Event Memory Platform",
      description:
        "eGuestWishes digitalizes guest wishes for weddings, corporate events, sales events, and special occasions with photo capture, video messages, personalized wishes, and social media uploads.",
      keywords: [
        "digital guestbook",
        "wedding guestbook software",
        "event memory platform",
        "digital guest wishes",
        "photo video guestbook",
        "event photo sharing software",
      ],
      canonical: "https://www.ionesoftsolutions.com/products/eguestwishes",

      robots: {
        index: false,
        follow: false,
      },
    },
  },
};
