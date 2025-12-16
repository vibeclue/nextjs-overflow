import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: {
    default: "Dev Overflow — вопросы и ответы для разработчиков",
    template: "%s | Dev Overflow",
  },
  description:
    "Dev Overflow — сообщество разработчиков. Вопросы и ответы по JavaScript, TypeScript, React, Next.js, backend, DevOps и архитектуре.",
  icons: {
    icon: "../public/images/site-logo.svg",
  },
  applicationName: "Dev Overflow",
  generator: "Next.js",
  keywords: [
    "Dev Overflow",
    "программирование",
    "вопросы и ответы",
    "разработка",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "backend",
    "frontend",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
