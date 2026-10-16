import { Geist } from "next/font/google";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geist.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
