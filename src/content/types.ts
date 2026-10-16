export type Locale = "es" | "en";

export type Role = {
  title: string;
  company: string;
  period: string;
  place: string;
  intro?: string;
  bullets: string[];
  /** Cantidad de viñetas visibles; el resto va en "Ver más". */
  collapseAfter?: number;
};

export type Project = {
  name: string;
  badge: string;
  summary: string;
  tags: string[];
  href: string;
  hrefLabel: string;
  image: string;
  imageAlt: string;
};

export type SkillGroup = { label: string; items: string[] };

export type Content = {
  locale: Locale;
  htmlLang: string;
  /** Ruta de esta versión y de la otra, con barra final. */
  path: string;
  altPath: string;
  altLabel: string;
  cvPath: string;
  cvPdf: string;
  meta: { title: string; description: string };
  ui: {
    skip: string;
    more: string;
    navLabel: string;
    techLabel: string;
    nav: Record<"about" | "experience" | "projects" | "skills" | "contact", string>;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    photoAlt: string;
    downloadCv: string;
  };
  about: { title: string; text: string };
  experience: { title: string; roles: Role[]; privateNote: string };
  projects: {
    title: string;
    intro: string;
    featured: Project[];
    othersTitle: string;
    others: { name: string; summary: string; href: string }[];
  };
  skills: { title: string; groups: SkillGroup[] };
  education: { title: string; text: string };
  contact: { title: string; text: string; email: string };
  cv: {
    title: string;
    subtitle: string;
    summary: string;
    projects: string;
    skills: string;
    education: string;
    experience: string;
  };
  footer: string;
};

export const SITE = {
  name: "Guido Fabian Cabrera",
  email: "guidofabiancabrera10@gmail.com",
  phone: "+54 9 379 401-1013",
  linkedin: "https://www.linkedin.com/in/guidofc/",
  github: "https://github.com/GuidoFabianCabrera",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://guidofc.com.ar",
};
