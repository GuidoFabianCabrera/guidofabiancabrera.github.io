import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { es } from "@/content/es";
import { buildMetadata } from "@/content/meta";

export const metadata = buildMetadata(es);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang={es.htmlLang}>{children}</RootShell>;
}
