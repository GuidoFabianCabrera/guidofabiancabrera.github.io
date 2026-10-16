import Image from "next/image";
import Link from "next/link";
import { SITE, type Content, type Project, type Role } from "@/content/types";

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-12 sm:py-14">
      <h2 id={`${id}-title`} className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Header({ c }: { c: Content }) {
  const items = [
    ["about", c.ui.nav.about],
    ["experience", c.ui.nav.experience],
    ["projects", c.ui.nav.projects],
    ["skills", c.ui.nav.skills],
    ["contact", c.ui.nav.contact],
  ] as const;
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-5 sm:px-6">
        <Link href={c.path} className="text-sm font-semibold tracking-tight">
          GFC
        </Link>
        <nav aria-label={c.ui.navLabel} className="flex items-center gap-5 text-sm text-muted">
          <ul className="hidden items-center gap-5 sm:flex">
            {items.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-text">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={c.altPath}
            hrefLang={c.locale === "es" ? "en" : "es"}
            className="rounded-md border border-line px-2 py-1 text-xs font-semibold text-text transition-colors hover:border-accent"
          >
            {c.altLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero({ c }: { c: Content }) {
  return (
    <section aria-labelledby="hero-title" className="py-14 sm:py-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Image
          src="/images/guido.jpg"
          alt={c.hero.photoAlt}
          width={112}
          height={112}
          priority
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-line"
        />
        <div>
          <p className="text-sm text-muted">{c.hero.location}</p>
          <h1 id="hero-title" className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.hero.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-accent">{c.hero.role}</p>
        </div>
      </div>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{c.hero.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={c.cvPdf}
          download
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
        >
          {c.hero.downloadCv}
        </a>
        {(
          [
            ["LinkedIn", SITE.linkedin],
            ["GitHub", SITE.github],
            ["Email", `mailto:${SITE.email}`],
          ] as const
        ).map(([label, href]) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

function RoleItem({ role, more }: { role: Role; more: string }) {
  const visible = role.collapseAfter ? role.bullets.slice(0, role.collapseAfter) : role.bullets;
  const hidden = role.collapseAfter ? role.bullets.slice(role.collapseAfter) : [];
  const bulletList = "list-disc space-y-2 pl-5 leading-relaxed marker:text-accent";
  return (
    <article className="relative before:absolute before:-left-7 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent before:content-['']">
      <h3 className="text-lg font-semibold tracking-tight">
        {role.title} <span className="text-muted">· {role.company}</span>
      </h3>
      <p className="mt-0.5 text-sm text-muted">
        {role.period} · {role.place}
      </p>
      {role.intro && <p className="mt-3 leading-relaxed text-muted">{role.intro}</p>}
      <ul className={`mt-3 ${bulletList}`}>
        {visible.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {hidden.length > 0 && (
        <details className="mt-2">
          <summary className={`cursor-pointer text-sm font-semibold ${linkClass} w-fit`}>
            {more} ({hidden.length})
          </summary>
          <ul className={`mt-2 ${bulletList}`}>
            {hidden.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}

function ProjectCard({ p, techLabel }: { p: Project; techLabel: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface md:flex-row">
      <Image
        src={p.image}
        alt={p.imageAlt}
        width={1280}
        height={800}
        className="aspect-[16/10] w-full border-b border-line object-cover object-top md:aspect-auto md:w-1/2 md:border-b-0 md:border-r"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{p.badge}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={techLabel}>
          {p.tags.map((t) => (
            <li key={t} className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent">
              {t}
            </li>
          ))}
        </ul>
        <a href={p.href} target="_blank" rel="noopener noreferrer" className={`mt-4 text-sm font-semibold ${linkClass}`}>
          {p.hrefLabel} ↗
        </a>
      </div>
    </article>
  );
}

export function Portfolio({ c }: { c: Content }) {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        {c.ui.skip}
      </a>
      <Header c={c} />
      <main className="mx-auto w-full max-w-3xl px-5 sm:px-6">
        <Hero c={c} />

        <Section id="about" title={c.about.title}>
          <p className="max-w-2xl text-lg leading-relaxed">{c.about.text}</p>
        </Section>

        <Section id="experience" title={c.experience.title}>
          <div className="ml-1 space-y-12 border-l border-line pl-6">
            {c.experience.roles.map((r) => (
              <RoleItem key={`${r.company}-${r.period}`} role={r} more={c.ui.more} />
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">{c.experience.privateNote}</p>
        </Section>

        <Section id="projects" title={c.projects.title}>
          <p className="mb-6 text-muted">{c.projects.intro}</p>
          <div className="grid gap-5">
            {c.projects.featured.map((p) => (
              <ProjectCard key={p.name} p={p} techLabel={c.ui.techLabel} />
            ))}
          </div>
          <h3 className="mb-4 mt-12 text-base font-semibold">{c.projects.othersTitle}</h3>
          <ul className="divide-y divide-line border-y border-line">
            {c.projects.others.map((o) => (
              <li key={o.name} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <a href={o.href} target="_blank" rel="noopener noreferrer" className={`font-semibold ${linkClass}`}>
                  {o.name} ↗
                </a>
                <p className="text-sm leading-relaxed text-muted">{o.summary}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title={c.skills.title}>
          <dl className="space-y-5">
            {c.skills.groups.map((g) => (
              <div key={g.label} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold">{g.label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {g.items.map((i) => (
                      <li key={i} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm">
                        {i}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="mb-2 mt-10 text-sm font-semibold">{c.education.title}</h3>
          <p className="text-muted">{c.education.text}</p>
        </Section>

        <Section id="contact" title={c.contact.title}>
          <p className="max-w-xl text-lg leading-relaxed">{c.contact.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              {c.contact.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
            >
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
            >
              GitHub
            </a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © 2026 {SITE.name} · {c.footer}
      </footer>
    </>
  );
}
