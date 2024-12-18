import AppProvider from "@/providers/appProvider/AppProvider";
import { Metadata } from "next";

// TODO : do sth with this
export const metadata: Metadata = {
  title: "BodyFullness – Zdrowie, Świadomość, Harmonia",
  description:
    "BodyFullness to aplikacja, która pomoże Ci osiągnąć harmonię ciała i umysłu poprzez świadome odżywianie oraz monitorowanie zdrowia.",
  keywords: [
    "świadome jedzenie",
    "mindful eating",
    "zdrowie",
    "dieta",
    "BodyFullness",
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
          <link rel="icon" href="/public/favicon.ico" />
          <meta name="theme-color" content="#4caf50" />
        </head>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </AppProvider>
  );
}
