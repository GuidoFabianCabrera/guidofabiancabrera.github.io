import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { en } from "@/content/en";
import { buildMetadata } from "@/content/meta";

export const metadata = buildMetadata(en);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang={en.htmlLang}>{children}</RootShell>;
}
