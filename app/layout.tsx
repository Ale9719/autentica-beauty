import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Autentica Beauty | Centro Estetico a Borore, Sardegna',
    template: '%s | Autentica Beauty',
  },
  description: 'Centro estetico a Borore specializzato in epilazione laser MeDioStar®, trattamenti viso e corpo, ceretta e massaggi.',
  metadataBase: new URL('https://www.autenticabeauty-fp.it'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}