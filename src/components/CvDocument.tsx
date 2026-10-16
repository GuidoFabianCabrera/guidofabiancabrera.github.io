import { SITE, type Content } from "@/content/types";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-1.5 mt-4 border-b border-neutral-300 pb-0.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-neutral-700">
      {children}
    </h2>
  );
}

// En las listas del CV las habilidades van seguidas por comas: estas se escriben en minúscula.
const COMMON_NOUNS = new Set(["Cron jobs", "Envío de correos", "Email sending", "Tareas programadas (cron jobs)"]);
const inList = (item: string) => (COMMON_NOUNS.has(item) ? item.charAt(0).toLowerCase() + item.slice(1) : item);

/** CV de una columna, texto real y sin imágenes. Sirve para imprimir y para generar el PDF. */
export function CvDocument({ c, showPhone = false }: { c: Content; showPhone?: boolean }) {
  const project = c.projects.featured[0];
  const site = SITE.url.replace(/^https?:\/\//, "");
  return (
    <div className="cv-page mx-auto max-w-[800px] px-8 py-8 text-[11px] leading-[1.45]">
      <header>
        <h1 className="text-[26px] font-bold leading-tight">{SITE.name}</h1>
        <p className="text-[13px] font-semibold">{c.cv.subtitle}</p>
        <p className="mt-1.5">
          {c.hero.location} · {SITE.email}
          {showPhone ? ` · ${SITE.phone}` : ""}
        </p>
        <p>
          {SITE.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ·{" "}
          {SITE.github.replace(/^https?:\/\//, "")} · {site}
        </p>
      </header>

      <H2>{c.cv.summary}</H2>
      <p>{c.about.text}</p>

      <H2>{c.cv.experience}</H2>
      {c.experience.roles.map((r) => (
        <article key={`${r.company}-${r.period}`} className="mb-3 break-inside-avoid">
          <h3 className="text-[12px] font-bold">
            {r.title} · {r.company}{" "}
            <span className="font-normal">
              — {r.period} · {r.place}
            </span>
          </h3>
          {r.intro && <p className="mt-0.5 italic">{r.intro}</p>}
          <ul className="mt-1 list-disc space-y-0.5 pl-4">
            {r.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}

      <H2>{c.cv.projects}</H2>
      <article className="break-inside-avoid">
        <h3 className="text-[12px] font-bold">
          {project.name} <span className="font-normal">— 2026 · {project.href.replace(/^https?:\/\//, "")}</span>
        </h3>
        <p className="mt-0.5">
          {project.badge}. {project.summary} {project.tags.join(", ")}.
        </p>
      </article>

      <H2>{c.cv.skills}</H2>
      <ul className="space-y-0.5">
        {c.skills.groups.map((g) => (
          <li key={g.label}>
            <strong>{g.label}:</strong> {g.items.map(inList).join(", ")}.
          </li>
        ))}
      </ul>

      <H2>{c.cv.education}</H2>
      <p>{c.education.text}</p>
    </div>
  );
}
