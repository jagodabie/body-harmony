import { Metadata } from "next";

import { Footer } from "@/components/Footer/Footer";
import { NavBarWrapper } from "@/components/Navbar/NavBarWrapper";
import AppProvider from "@/providers/appProviders/AppProviders";

export const metadata: Metadata = {
  title: "BodyHarmony – Zdrowie, Świadomość, Harmonia",
  description:
    "BodyHarmony to aplikacja, która pomoże Ci osiągnąć harmonię ciała i umysłu poprzez świadome odżywianie oraz monitorowanie zdrowia.",
  keywords: [
    "świadome jedzenie",
    "mindful eating",
    "zdrowie",
    "dieta",
    "BodyHarmony",
    "harmonia ciała",
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
