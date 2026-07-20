import { ServiceDetail } from "../types/serviceDetails";
import {
  FileText,
  Boxes,
  CircleCheck,
  MonitorSmartphone,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export const serviceDetails: Record<string, ServiceDetail> = {
  "Smart-Technology-and-Solution": {
    title: "Smart Technology and Solution",
    subtitle: "Our Services",
    heroImage: "/images/service/ST-hero.webp",
    description:
      "From consulting to development, our services are designed to empower your business with innovation, efficiency, and long-term growth.",
    primaryButtonText: "Explore Solutions",
    primaryButtonHref: "/products",

    // secondaryButtonText: "Get in Touch",
    // secondaryButtonHref: "/contact",
    sections: [
      {
        title: "What is Smart Technology?",
        description:
          "The term 'SMART' originally comes from the acronym 'Self-Monitoring, Analysis and Reporting Technology'.",
        image: "/images/service/wst.webp",
        imagePosition: "left",
        lists: [
          {
            title: "Examples of Smart Technology",
            items: [
              "Internet of Things (IoT) devices",
              "Smart Connected Devices",
              "Smart Devices",
            ],
          },
          {
            title: "Areas of Smart Solutions that are implemented",
            items: [
              "Visitor Management",
              "Smart Lockers",
              "Way Finder",
              "Self Service Wi-Fi Provision",
              "Room/Hot Desk Booking",
              "Mobile App to Manage Requests",
              "Car Park Occupancy & Analytics",
              "Office Space Occupancy, Ambience & Energy Management",
            ],
          },
          {
            title: "Benefits of AI and IOT",
            items: [
              "Monitor Day-to-Day Operations",
              "Increase Operational Efficiency",
              "Improve Workforce Productivity",
              "Centralized Sensor Alerts",
              "Visualization & Data Analytics",
              "Optimize Energy & Space Usage",
            ],
          },
        ],
      },

      {
        title: "Smart Building and Office Management System",

        lists: [
          {
            title: "Visitor Management System",
            image: "/images/service/vms.webp",
            imagePosition: "right",
            items: [
              "Leenira Visitor Management System Integrated with Office 365.",
              "Visitor receives meeting invite.",
              "Self-check in with QR code, temperature, and Face recognition.",
              "Visitor dashboard and summary.",
              "Integration with access control with Gantry.",
              "Integration with Smart Lockers.",
            ],
          },

          {
            title: "Smart Lockers",
            image: "/images/service/SL.webp",
            imagePosition: "left",
            items: [
              "Integration with Visitor Management System.",
              "Auto Allocate to visitors upon check in.",
              "Modular and scalable solution.",
              "Intelligent storage.",
              "Contact free delivery.",
              "Traditional way of lockers – Pin / QR code / RFID card. ",
              "IT Asset Management.",
              "Secure and Responsive solution.",
            ],
          },

          {
            title: "Way Finder",
            description:
              "Integrated with the Room Booking System (Creston). Way Finder offers a range of options to facilitate the flow of information.",
            image: "/images/service/WF.webp",
            imagePosition: "right",
            items: [
              "Guides visitors and staff to room locations.",
              "Displays upcoming meetings and attendees.",
              "Displays digital floor maps.",
              "Shows ongoing and upcoming meetings.",
              "Displays meeting details.",
              "Shows the floor plan of the level.",
              "Supports remote control.",
              "Lists scheduled meetings for the day.",
            ],
          },

          {
            title: "Self Service WIFI provision",
            description: "Integrated with Visitor Management and Cisco Wi-Fi:",
            image: "/images/service/SSWP.webp",
            imagePosition: "left",
            items: [
              "Visitor can self-sign with their Visitor ID and Email.",
              "Audit logs in Cisco.",
            ],
          },

          {
            title: "Room / Hot Desk Booking",
            description:
              "Integrated with Office 365 and Crestron room booking panels for real-time room availability, scheduling, and workspace management.",
            image: "/images/service/hot-desk.webp",
            imagePosition: "right",
            items: [
              "Real-Time Room Booking & Status Updates",
              "Integrated with Office 365 & Crestron",
              "Book Meeting Rooms & Hot Desks",
              "Invite Visitors & Sync with Visitor Management",
              "Start, End or Extend Meetings from Booking Panels",
              "Occupancy & IAQ Sensor Integration",
              "Occupancy Analytics & Reporting",
              "Ambience & Energy Management",
            ],
          },

          {
            title: "Mobile App to Manage Requests",
            description:
              "A mobile application that enables employees and visitors to manage workplace resources efficiently with real-time booking and availability.",
            image: "/images/service/mobile-app.svg",
            imagePosition: "left",
            items: [
              "Book Meeting Rooms",
              "Book Time Slots",
              "Real-Time Room Availability",
              "Meeting Room Occupancy Tracking",
              "View Room Features & Amenities",
            ],
          },

          {
            title: "Car Park Occupancy & Analytics",
            description:
              "A smart parking management solution that provides real-time parking availability, occupancy monitoring, and AI-powered vehicle analytics.",
            image: "/images/service/car-park.svg",
            imagePosition: "right",
            items: [
              "Real-Time Parking Availability",
              "Car Plate Recognition (ANPR)",
              "AI Camera & Sensor Integration",
              "Carbon Monoxide Level Analytics",
              "Digital Parking Experience",
              "Parking Occupancy Monitoring",
              "Optimized Parking Allocation",
              "Real-Time Parking Insights",
            ],
          },
        ],
      },

      {
        title: "Office Space Occupancy, Ambience and Energy Management",

        lists: [
          {
            title: "Office Space Occupancy",
            image: "/images/service/OSM.webp",
            imagePosition: "right",
            items: [
              "Monitor and display real time temperature and humidity.",
              "Detect the presence of people and monitor the activity level in particular area.",
              "Monitor air quality and redistribute the usage.",
              "Desks to rooms and open areas in the building occupancy details.",
              "Space utilization.",
              "Wireless Sensors sends information to the system to analyse occupancy and Energy Saving Strategy.",
            ],
          },

          {
            title: "Energy Management",
            image: "/images/service/ES.webp",
            imagePosition: "left",
            description:
              "Monitor, control and conserve the energy usage. Identify and eliminate unnecessary energy usage to create a comfortable indoor environment.",
            items: [
              "Detect abnormal energy utilization.",
              "Adjust through the devices and reduce the total energy consumption.",
              "Track monthly energy with Energy meter reader and individual power outlet.",
              "Analyze by energy category and location.",
              "Predict usage and redistribute energy.",
              "Receive alert for any outage and sudden surge to react to events promptly.",
              "HVAC (Heating, Ventilation, and air conditioning) loads are turned off when no person around in the rooms.",
              "Demand Controlled Ventilation.",
            ],
          },

          {
            title: "HVAC Management",
            description:
              "A smart HVAC management solution that optimizes heating, ventilation, and air conditioning based on occupancy to improve comfort and energy efficiency.",
            image: "/images/service/hvac.webp",
            imagePosition: "right",
            items: [
              "Occupancy-Based HVAC Control",
              "After-Hours AC Requests",
              "Temperature Adjustment on Demand",
              "Real-Time AHU Monitoring",
              "Energy-Efficient Climate Management",
            ],
          },
        ],
      },
    ],
    seo: {
      title: "Smart Technology and Solution - iOnesoft Solutions",

      description:
        "What is Smart Technology and what are its Benefits? The term “SMART” originally comes from the acronym “Self-Monitoring, Analysis and Reporting Technology”. Examples of Smart Technology: Internet of Things (IoT) devices Smart Connected Devices Smart Devices Benefits of AI and IOT Monitor and manage day to day operations. Increase operational efficiency. Manpower productivity. With centralized",

      keywords: [],

      canonical:
        "https://www.ionesoftsolutions.com/ios/services/smart-technology-and-solution",

      openGraph: {
        title: "Smart Technology and Solution - iOnesoft Solutions",
        description:
          "What is Smart Technology and what are its Benefits? The term “SMART” originally comes from the acronym “Self-Monitoring, Analysis and Reporting Technology”. Examples of Smart Technology: Internet of Things (IoT) devices Smart Connected Devices Smart Devices Benefits of AI and IOT Monitor and manage day to day operations. Increase operational efficiency. Manpower productivity. With centralized",
        url: "https://www.ionesoftsolutions.com/ios/services/smart-technology-and-solution",
        siteName:
          "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            secureUrl:
              "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            width: 1200,
            height: 630,
            alt: "iOnesoft Solutions",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "Smart Technology and Solution - iOnesoft Solutions",
        description:
          "What is Smart Technology and what are its Benefits? The term “SMART” originally comes from the acronym “Self-Monitoring, Analysis and Reporting Technology”. Examples of Smart Technology: Internet of Things (IoT) devices Smart Connected Devices Smart Devices Benefits of AI and IOT Monitor and manage day to day operations. Increase operational efficiency. Manpower productivity. With centralized",
        images: [
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        ],
      },

      robots: {
        index: false,
        follow: false,
      },
    },
  },
  "custom-application-development": {
    title: "Custom Application Development",
    subtitle: "Our Services",
    heroImage: "/images/service/CD-hero.webp",
    description:
      "iOnesoft Solutions Software Development Lifecycle (SDLC) Methodology is stringent to ensure that all of the necessary aspects of software development are addressed (e.g. requirements, design, quality assurance, etc.) and yet flexible enough to be customized to fit the needs by the project and client.",
    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    // secondaryButtonText: "Learn More",
    // secondaryButtonHref: "/sts",
    sections: [
      {
        title: "Scalable, Secure & Business-Focused Software Development",
        image: "/images/service/custom-dev.svg",
        imagePosition: "left",
        lists: [
          {
            title:
              "Our development practices and tools are from the best ideas in the field",
            items: [
              "Definition of project-specific standards and terminology;",
              "Use of code generation tools and standard frameworks;",
              "Storage of source code in robust, secure, networked, code repositories;",
              "Standard use of unit testing to detect issues and provide efficient regression testing;",
              "Automated evaluation of code against a large set of standards, conventions and design patterns;",
              "Automated, continuous integration and build;",
              "Specialized performance, stress and security testing;",
              "Tracking of issues and test results; and",
              "Robust code documentation, from comments in the code;",
              "We provide customized solutions based on your business needs using .NET platforms and SQL databases.",
            ],
          },
        ],
      },
    ],
    seo: {
      title:
        "Hybrid App Development Service and Custom Application Development",

      description:
        "iOneSoft Solutions provides customised software application development services, the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations",

      keywords: [
        "customised software development",
        "customised software application",
        "custom application development",
        "custom mobile app development",
      ],

      canonical:
        "https://www.ionesoftsolutions.com/ios/services/custom-application-development",

      openGraph: {
        title:
          "Hybrid App Development Service and Custom Application Development",
        description:
          "iOneSoft Solutions provides customised software application development services, the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations",
        url: "https://www.ionesoftsolutions.com/ios/services/custom-application-development",
        siteName:
          "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            secureUrl:
              "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            width: 1200,
            height: 630,
            alt: "iOnesoft Solutions",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title:
          "Hybrid App Development Service and Custom Application Development",
        description:
          "iOneSoft Solutions provides customised software application development services, the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations",
        images: [
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        ],
      },

      robots: {
        index: false,
        follow: false,
      },
    },
  },
  "business-process-and-consulting": {
    title: "Business Process and Consulting Services",
    subtitle: "Our Services",
    heroImage: "/images/service/bp-hero.svg",
    description:
      "Optimize your business operations with expert process analysis and consulting services. We identify inefficiencies, eliminate manual workflows, and recommend tailored digital solutions that improve productivity, reduce costs, and support sustainable business growth through process automation and continuous improvement.",
    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    // secondaryButtonText: "Learn More",
    // secondaryButtonHref: "/sts",
    sections: [
      {
        title: "Business Process Analysis & Digital Transformation",
        image: "/images/service/business-process.svg",
        imagePosition: "left",
        lists: [
          {
            title:
              "Business Process Redesign that a BPM project manager needs to understand:",
            items: [
              "Planning and Scheduling",
              "Analysis and Design",
              "Interviewing and Facilitation",
              "Communication and Change Management",
            ],
          },
        ],
      },
    ],
    seo: {
      title: "Business Process & Consulting Services",

      description:
        "iOneSoft Solutions provides Business Process and Redesign consulting day-to-day operational management, project management improvement",

      keywords: [
        "business process services",
        "business process consulting",
        "process improvement consulting",
      ],

      canonical:
        "https://www.ionesoftsolutions.com/ios/services/business-process-and-consulting-services",

      openGraph: {
        title: "Business Process & Consulting Services",
        description:
          "iOneSoft Solutions provides Business Process and Redesign consulting day-to-day operational management, project management improvement",
        url: "https://www.ionesoftsolutions.com/ios/services/business-process-and-consulting-services",
        siteName:
          "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            secureUrl:
              "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            width: 1200,
            height: 630,
            alt: "iOnesoft Solutions",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "Business Process & Consulting Services",
        description:
          "iOneSoft Solutions provides Business Process and Redesign consulting day-to-day operational management, project management improvement",
        images: [
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        ],
      },

      robots: {
        index: false,
        follow: false,
      },
    },
  },
  "sharepoint-application-development": {
    title: "SharePoint Application Development and Infrastructure Services",
    subtitle: "Our Services",
    heroImage: "/images/service/sa-hero.svg",
    description:
      "Build secure, scalable, and customized SharePoint applications that streamline collaboration, document management, workflow automation, and business processes while improving productivity across your organization.",
    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    // secondaryButtonText: "Learn More",
    // secondaryButtonHref: "/sts",
    sections: [
      {
        title: "SharePoint Solutions",
        // image: "/images/service/business-process.svg",
        lists: [
          {
            items: [
              "Design and implementation of capture technology for imaging your documents into custom SharePoint document libraries",
              "Creation of custom content types",
              "Creation of custom permission settings",
              "Adding multi-lingual setup to efficiently and effectively manage your content",
              "Design and implementation of specialized workflow processes for your company",
              "SharePoint Deployment Planning Services",
              "Microsoft Project Integration with SharePoint (MOSSMOSS / SHAREPOINT)",
              "Microsoft Exchange Integration with SharePoint (WSS)",
              "Dynamics CRM Integration with SharePoint (WSS & MOSSMOSS / SHAREPOINT)",
              "Application Lifecycle Management Services",
              "Business Ready Webparts",
              "ISA Server Integration with SharePoint",
              "Single Sign-on (SSO) in SharePoint",
              "SharePoint Information Rights Management Solutions",
              "SharePoint KMS",
              "SharePoint Development",
              "Excel Reporting Service",
              "SharePoint Business Intelligence",
              "SharePoint Enterprise Content Management",
              "SharePoint Business Process and Forms",
              "SharePoint Collaboration",
              "SharePoint Search",
              "Microsoft SharePoint Portal Development",
              "Windows SharePoint Service 3.0",
              "SharePoint Workflow Integration",
              "SharePoint People and Personalization",
              "SharePoint Sites Development and Management",
              "SharePoint Web Part Development",
              "SharePoint Branding",
              "SharePoint Site Provisioning",
              "SharePoint 2010 Development",
              "SharePoint 2010 Business Intelligence",
            ],
          },
        ],
      },
    ],

    seo: {
      title: "SharePoint Application Development Company",

      description:
        "iOneSoft Solutions provides SharePoint Application Development and Infrastructure Services you need for a true Enterprise Content Management solutions",

      keywords: [
        "sharepoint application development",
        "sharepoint programming",
        "sharepoint app development",
        "sharepoint online app development",
        "sharepoint software development",
      ],

      canonical:
        "https://www.ionesoftsolutions.com/ios/services/sharepoint-application-development",

      openGraph: {
        title: "SharePoint Application Development Company",
        description:
          "iOneSoft Solutions provides SharePoint Application Development and Infrastructure Services you need for a true Enterprise Content Management solutions",
        url: "https://www.ionesoftsolutions.com/ios/services/sharepoint-application-development",
        siteName:
          "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            secureUrl:
              "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            width: 1200,
            height: 630,
            alt: "iOnesoft Solutions",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "SharePoint Application Development Company",
        description:
          "iOneSoft Solutions provides SharePoint Application Development and Infrastructure Services you need for a true Enterprise Content Management solutions",
        images: [
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        ],
      },

      robots: {
        index: false,
        follow: false,
      },
    },
  },
  "mobile-responsive": {
    title: "Mobile Responsive Website Design",
    subtitle: "Our Services",
    heroImage: "/images/service/mr-hero.webp",
    description:
      "We design and develop professional mobile responsive websites that adapt smoothly across desktops, tablets, and mobile devices, helping your business deliver a better user experience, build trust, and increase online conversions.",

    primaryButtonText: "Request For Demo",
    primaryButtonHref: "/contact",

    sections: [
      {
        title: "What is Responsive Web Design?",
        image: "/images/service/mr-1.svg",
        imagePosition: "left",
        description:
          "Responsive web design ensures your website automatically adapts to different screen sizes and devices. The goal is to provide users with a smooth, accessible, and consistent browsing experience whether they visit your site from a desktop, laptop, tablet, or mobile phone.",

        lists: [
          {
            title: "Why Responsive Design Matters",
            items: [
              "Creates a better user experience across all devices",
              "Improves readability and navigation on mobile screens",
              "Helps reduce bounce rates and improve engagement",
              "Supports better SEO and mobile search visibility",
              "Allows your business to reach customers anywhere",
            ],
          },
        ],
      },

      {
        title: "Build Customer Confidence and Trust",
        image: "/images/service/mr-2.svg",
        imagePosition: "right",
        description:
          "Your website is often the first impression customers have of your business. A professional, responsive, and easy-to-use website helps customers trust your brand and interact with your services more confidently.",

        lists: [
          {
            title: "Business Benefits",
            items: [
              "Professional website design that builds credibility",
              "Accessible layouts for all users and devices",
              "Global-ready structure for wider customer reach",
              "Easy product and service browsing experience",
              "Simple navigation that helps customers find information quickly",
            ],
          },
        ],
      },

      {
        title: "Web Design & Development Services We Provide",
        image: "/images/service/mr-3.webp",
        imagePosition: "left",
        description:
          "iOneSoft Solutions provides end-to-end website design and development services using modern tools, frameworks, and technologies. We create websites that are responsive, user-friendly, SEO-ready, and aligned with your business goals.",

        lists: [
          {
            title: "Services We Provide",
            items: [
              "Mobile responsive website design",
              "3D and modern UI design",
              "Search Engine Optimization (SEO)",
              "PHP, XHTML, HTML5, WordPress and Joomla development",
              "JavaScript, Angular JS and Node JS development",
              "Web hosting and maintenance",
              "Design and branding for logos, flyers and brochures",
              "CMS development for web content management",
              "Search Engine Marketing (SEM)",
            ],
          },
        ],
      },
    ],

    seo: {
      title: "Responsive Web Design Services & App Development",

      description:
        "iOneSoft Solutions provides Responsive web design service and web developing a website with flexible layouts that adapt to each user's device. Sites with responsive design will change and display on any device or screen size",

      keywords: [
        "responsive website design",
        "responsive website design service",
        "responsive website development",
      ],

      canonical:
        "https://www.ionesoftsolutions.com/ios/services/mobile-responsive-website-design",

      openGraph: {
        title: "Responsive Web Design Services & App Development",
        description:
          "iOneSoft Solutions provides Responsive web design service and web developing a website with flexible layouts that adapt to each user's device. Sites with responsive design will change and display on any device or screen size",
        url: "https://www.ionesoftsolutions.com/ios/services/mobile-responsive-website-design",
        siteName:
          "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            secureUrl:
              "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
            width: 1200,
            height: 630,
            alt: "iOnesoft Solutions",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "Responsive Web Design Services & App Development",
        description:
          "iOneSoft Solutions provides Responsive web design service and web developing a website with flexible layouts that adapt to each user's device. Sites with responsive design will change and display on any device or screen size",
        images: [
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        ],
      },

      robots: {
        index: false,
        follow: false,
      },
    },
  },
};
