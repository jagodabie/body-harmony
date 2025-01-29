import { Metadata } from "next";

import { Footer } from "@/components/Footer/Footer";
import { NavBarWrapper } from "@/components/Navbar/NavBarWrapper";
import AppProvider from "@/providers/appProviders/AppProviders";

export const metadata: Metadata = {
  title: "BodyHarmony – Health, Awareness, Harmony",
  description:
    "BodyHarmony is an app that helps you achieve body and mind harmony through mindful eating and health monitoring.",
  keywords: [
    "mindful eating",
    "health",
    "diet",
    "BodyHarmony",
    "body harmony",
    "well-being",
  ],
  manifest: "/web.manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#4caf50" />
        </head>
        <body>
          <header>
            <NavBarWrapper
              navItems={[
                { label: "Main", href: "/" },
                { label: "About us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "User Registration", href: "/userRegistration" },
                { label: "Build Form", href: "/formBuilder" },
              ]}
            />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </AppProvider>
  );
}
