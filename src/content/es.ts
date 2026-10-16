import type { Content } from "./types";

export const es: Content = {
  locale: "es",
  htmlLang: "es",
  path: "/",
  altPath: "/en/",
  altLabel: "EN",
  cvPath: "/cv/",
  cvPdf: "/Guido-Fabian-Cabrera-CV-ES.pdf",
  meta: {
    title: "Guido Fabian Cabrera — Desarrollador Full Stack",
    description:
      "Desarrollador full stack de Corrientes, Argentina. Vue, React y Node.js: paneles de administración, APIs e integraciones con servicios externos.",
  },
  ui: {
    skip: "Ir al contenido",
    more: "Ver más",
    navLabel: "Principal",
    techLabel: "Tecnologías",
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
  },
  hero: {
    name: "Guido Fabian Cabrera",
    role: "Desarrollador Full Stack",
    tagline:
      "Desarrollo productos web de punta a punta: paneles en Vue y Next.js, APIs en Node.js e integraciones con servicios externos.",
    location: "Corrientes, Argentina",
    photoAlt: "Retrato de Guido Fabian Cabrera",
    downloadCv: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    text: "Desarrollador full stack con más de 4 años de experiencia profesional. Desde 2024 en GivU, plataforma mexicana de recommerce de celulares, mantengo y evoluciono el backend en Node.js y los paneles de administración, y conecto el sistema con servicios externos (WhatsApp y SMS, envíos, tienda WordPress, evaluación de imágenes con IA). Antes pasé dos años como desarrollador front-end con Vue en un sistema de gestión de emergencias médicas.",
  },
  experience: {
    title: "Experiencia",
    privateNote:
      "El código de GivU y de Penta es privado. Puedo contar cómo funciona cada parte en una conversación.",
    roles: [
      {
        title: "Desarrollador Full Stack",
        company: "GivU",
        period: "may 2024 – actualidad",
        place: "Remoto, México",
        collapseAfter: 4,
        intro: "Plataforma mexicana de recommerce para vender, cambiar y comprar celulares.",
        bullets: [
          "Mantengo y evoluciono el backend (Node.js, Koa, Knex, PostgreSQL), el panel de administración de GivU App (Vue) y el de GivU Pro (Next.js), la herramienta de diagnóstico de equipos para empresas.",
          "Integré servicios externos: envíos con DHL y EnvíoClick (guías, seguimiento y avisos al usuario), WhatsApp y SMS con Twilio (notificaciones y verificación) y la tienda WordPress (WooCommerce).",
          "Mantengo el servicio que evalúa fotos de equipos con IA y calcula un puntaje, y sumé el escaneo estético de fotos a GivU Pro.",
          "Desarrollé funcionalidades de producto: listas de precios y enganche por partner, vigencia de ofertas en días hábiles, seguimiento de leads con filtros y exportación a Excel, y notificaciones y correos en español e inglés.",
          "En GivU Pro (API en Go y panel en Next.js, desde agosto 2026, con asistencia de IA): fotos del equipo con URLs firmadas, carta de cesión firmada, datos del cliente configurables por empresa, detección de diagnósticos del mismo cliente y envío de resultados por correo.",
          "Mantengo y mejoro el script de precios (Node.js) que consulta Mercado Libre, Amazon, Walmart y Elektra para calcular el precio de mercado de unos 400 modelos de celulares; esos precios alimentan el algoritmo de GivU.",
          "Preparo los despliegues a producción, con sus migraciones de base de datos.",
        ],
      },
      {
        title: "Desarrollador Front-end",
        company: "Penta Security Solutions",
        period: "jul 2022 – may 2024",
        place: "Argentina",
        intro:
          "Consultora de software. Trabajé asignado a Acudir Emergencias Médicas (CABA), en el sistema de gestión integral de la empresa: médicos, ambulancias y flotas, turnos, equipos, consultas virtuales, llamados de emergencia, contabilidad y nómina. Flujo con Git y pull requests en Azure DevOps, y Scrum y Kanban según la temporada.",
        bullets: [
          "Desarrollé en Vue (Vuex, Vuetify) mejoras sobre distintos módulos del sistema, como campos nuevos y su visualización en otras pantallas.",
          "Corregí errores y mejoré funcionalidades que ya estaban en uso, incluidas las pantallas antiguas en vistas Razor (.cshtml) que convivían con las nuevas en Vue.",
          "Consumí las APIs del back-end y coordiné con ese equipo los cambios que necesitaba el front.",
        ],
      },
      {
        title: "Desarrollador Front-end freelance",
        company: "Independiente",
        period: "feb 2021 – jul 2022",
        place: "Argentina",
        bullets: [
          "Maquetación responsive de sitios de proyectos blockchain con Nuxt.js, React, Sass y Vuetify.",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Proyectos propios. Uso asistentes de IA (Claude Code) en mi trabajo personal.",
    featured: [
      {
        name: "Mostrador Online",
        badge: "Proyecto propio · en validación",
        summary:
          "Plataforma multi-tenant para que comercios de Corrientes publiquen su catálogo y reciban pedidos por WhatsApp. Cada negocio tiene un panel (productos con fotos, horarios, pedidos, estadísticas, importación de Excel y aumentos masivos de precios) y una página pública con SEO.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Postgres (RLS, Drizzle)", "Cloudflare R2"],
        href: "https://mostradoronline.com.ar",
        hrefLabel: "Ver sitio",
        image: "/images/mostrador-online.jpg",
        imageAlt: "Página de inicio de Mostrador Online con un catálogo de ferretería en un celular",
      },
    ],
    othersTitle: "Otros proyectos",
    others: [
      {
        name: "Mi facu",
        summary:
          "Panel que junta el sistema SIU-Guaraní y el campus Moodle de la UNNE en una sola pantalla: entregas, calificaciones, materias e inscripciones. Backend propio que consulta Moodle por su API y lee Guaraní en solo lectura (React, Node.js y Express). Proyecto personal y no oficial; hace falta una cuenta de la UNNE para probarlo.",
        href: "https://mi-facu.vercel.app",
      },
      {
        name: "Quorum",
        summary: "Juego web basado en el juego de mesa Secret Hitler, con votación anónima y resultados en tiempo real.",
        href: "https://quorum.vercel.app",
      },
      {
        name: "Álbum del server",
        summary:
          "Sitio de un server de Minecraft entre amigos: álbum de capturas con me gusta y comentarios, y mapa 3D del mundo.",
        href: "https://album-del-server.vercel.app",
      },
      {
        name: "Taller de Yeso",
        summary:
          "App web para un taller de yeso: catálogo de moldes, calculadora de yeso y agua, precios y ganancia, seguimiento de producción y cronómetros de secado.",
        href: "https://taller-yeso.vercel.app",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    groups: [
      {
        label: "Front-end",
        items: ["Vue", "Vuex", "Vuetify", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass", "HTML", "CSS"],
      },
      {
        label: "Back-end",
        items: ["Node.js", "Koa", "PostgreSQL", "Knex", "APIs REST", "Cron jobs", "Envío de correos"],
      },
      {
        label: "Integraciones",
        items: ["Twilio (WhatsApp y SMS)", "DHL", "EnvíoClick", "WordPress / WooCommerce", "OpenAI", "AWS S3", "Cloudflare R2"],
      },
      {
        label: "Herramientas",
        items: ["Git", "GitHub", "Azure DevOps", "Docker", "pnpm", "Claude Code"],
      },
      { label: "Nociones", items: ["n8n (automatizaciones básicas)"] },
    ],
  },
  education: {
    title: "Formación",
    text: "Platzi, Desarrollo de páginas web (2021). Autodidacta desde entonces.",
  },
  contact: {
    title: "Contacto",
    text: "Si querés conversar sobre un proyecto o una oportunidad, escribime.",
    email: "Escribirme por mail",
  },
  cv: {
    title: "CV — Guido Fabian Cabrera",
    subtitle: "Desarrollador Full Stack · Vue, React y Node.js",
    summary: "Resumen",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Formación",
  },
  footer: "Hecho con Next.js.",
};
