import type { Content } from "./types";

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  path: "/en/",
  altPath: "/",
  altLabel: "ES",
  cvPath: "/en/cv/",
  cvPdf: "/Guido-Fabian-Cabrera-CV-EN.pdf",
  meta: {
    title: "Guido Fabian Cabrera — Full Stack Developer",
    description:
      "Full stack developer from Corrientes, Argentina. Vue, React and Node.js: admin dashboards, APIs and third-party integrations.",
  },
  ui: {
    skip: "Skip to content",
    more: "Show more",
    navLabel: "Main",
    techLabel: "Technologies",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  },
  hero: {
    name: "Guido Fabian Cabrera",
    role: "Full Stack Developer",
    tagline:
      "I build web products end to end: dashboards in Vue and Next.js, Node.js APIs and integrations with external services.",
    location: "Corrientes, Argentina",
    photoAlt: "Portrait of Guido Fabian Cabrera",
    downloadCv: "Download CV",
  },
  about: {
    title: "About",
    text: "Full stack developer with 4+ years of professional experience. Since 2024 at GivU, a Mexican recommerce platform for phones, I maintain and evolve the Node.js backend and the admin dashboards, and connect the system to external services (WhatsApp and SMS, shipping, a WordPress store, AI image evaluation). Before that, I spent two years as a front-end developer using Vue on a medical-emergency management system.",
  },
  experience: {
    title: "Experience",
    privateNote:
      "The GivU and Penta code is private. I'm happy to walk through how each part works in a conversation.",
    roles: [
      {
        title: "Full Stack Developer",
        company: "GivU",
        period: "May 2024 – present",
        place: "Remote, Mexico",
        collapseAfter: 4,
        intro: "Mexican recommerce platform to sell, trade and buy phones.",
        bullets: [
          "Maintain and evolve the backend (Node.js, Koa, Knex, PostgreSQL), the GivU App admin dashboard (Vue) and the GivU Pro dashboard (Next.js), a device-diagnostics tool for businesses.",
          "Integrated external services: shipping with DHL and EnvíoClick (labels, tracking and user notifications), WhatsApp and SMS with Twilio (notifications and verification), and the WordPress store (WooCommerce).",
          "Maintain the service that evaluates device photos with AI and returns a score, and added cosmetic photo scanning to GivU Pro.",
          "Built product features: partner price lists and down payments, offer expiry in business days, lead tracking with filters and Excel export, and notifications and emails in Spanish and English.",
          "On GivU Pro (Go API and Next.js dashboard, since August 2026, AI-assisted): device photos via signed URLs, signed transfer-of-ownership letter, per-company customer fields, detection of diagnostics from the same customer, and results sent by email.",
          "Maintain and improve the pricing script (Node.js) that queries Mercado Libre, Amazon, Walmart and Elektra to compute market prices for about 400 phone models, which feed GivU's pricing algorithm.",
          "Prepare production releases, including database migrations.",
        ],
      },
      {
        title: "Front-end Developer",
        company: "Penta Security Solutions",
        period: "Jul 2022 – May 2024",
        place: "Argentina",
        intro:
          "Software consultancy. Worked assigned to Acudir Emergencias Médicas (Buenos Aires), on the company's all-in-one management system: doctors, ambulances and fleets, appointments, equipment, virtual consultations, emergency calls, accounting and payroll. Git and pull request workflow on Azure DevOps, with Scrum and Kanban depending on the season.",
        bullets: [
          "Built improvements across several modules of the system in Vue (Vuex, Vuetify), such as new fields and showing them on other screens.",
          "Fixed bugs and improved features already in use, including legacy screens in Razor views (.cshtml) that coexisted with the new Vue ones.",
          "Consumed the back-end APIs and coordinated with that team on the changes the front-end needed.",
        ],
      },
      {
        title: "Freelance Front-end Developer",
        company: "Independent",
        period: "Feb 2021 – Jul 2022",
        place: "Argentina",
        bullets: ["Responsive implementation of blockchain project websites with Nuxt.js, React, Sass and Vuetify."],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Personal projects. I use AI assistants (Claude Code) in my personal work.",
    featured: [
      {
        name: "Mostrador Online",
        badge: "Personal project · in validation",
        summary:
          "Multi-tenant platform where shops in Corrientes publish their catalog and receive orders through WhatsApp. Each business has a dashboard (products with photos, opening hours, orders, stats, Excel import, bulk price increases) and a public SEO page.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Postgres (RLS, Drizzle)", "Cloudflare R2"],
        href: "https://mostradoronline.com.ar",
        hrefLabel: "Visit site",
        image: "/images/mostrador-online.jpg",
        imageAlt: "Mostrador Online home page showing a hardware store catalog on a phone",
      },
    ],
    othersTitle: "Other projects",
    others: [
      {
        name: "Mi facu",
        summary:
          "Dashboard that brings the SIU-Guaraní system and the Moodle campus of the UNNE (a university in Argentina) together on one screen: assignments, grades, subjects and enrollments. Its own backend reads Moodle through its API and Guaraní in read-only mode (React, Node.js and Express). Personal, unofficial project; a UNNE account is needed to try it.",
        href: "https://facu.guidofc.com.ar",
      },
      {
        name: "Quorum",
        summary: "Web game based on the board game Secret Hitler.",
        href: "https://quorum.guidofc.com.ar",
      },
      {
        name: "Server album",
        summary:
          "Website for a Minecraft server among friends: screenshot album with likes and comments, and a 3D map of the world.",
        href: "https://album.guidofc.com.ar",
      },
      {
        name: "Taller de Yeso",
        summary:
          "Web app for a plaster workshop: mold catalog, plaster and water calculator, prices and profit, production tracking and drying timers.",
        href: "https://yeso.guidofc.com.ar",
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        label: "Front-end",
        items: ["Vue", "Vuex", "Vuetify", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass", "HTML", "CSS"],
      },
      {
        label: "Back-end",
        items: ["Node.js", "Koa", "PostgreSQL", "Knex", "REST APIs", "Cron jobs", "Email sending"],
      },
      {
        label: "Integrations",
        items: ["Twilio (WhatsApp and SMS)", "DHL", "EnvíoClick", "WordPress / WooCommerce", "OpenAI", "AWS S3", "Cloudflare R2"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Azure DevOps", "Docker", "pnpm", "Claude Code"],
      },
      { label: "Familiar with", items: ["n8n (basic automations)"] },
    ],
  },
  education: {
    title: "Education",
    text: "Platzi, Web Development (2021). Self-taught since then.",
  },
  contact: {
    title: "Contact",
    text: "If you'd like to talk about a project or an opportunity, write to me.",
    email: "Email me",
  },
  cv: {
    title: "CV — Guido Fabian Cabrera",
    subtitle: "Full Stack Developer · Vue, React and Node.js",
    summary: "Summary",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
  },
  footer: "Built with Next.js.",
};
