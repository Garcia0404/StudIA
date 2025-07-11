import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudIA",
  description: "La plataforma de estudio definitiva que combina tarjetas inteligentes, simulacros adaptativos y asistencia de IA para maximizar tu aprendizaje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
