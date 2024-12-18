// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public", // Lokalizacja generowanego Service Workera
  register: true, // Automatyczna rejestracja Service Workera
  skipWaiting: true, // Natychmiastowa aktywacja nowego Service Workera
  disable: process.env.NODE_ENV === "development", // Wyłączenie w trybie dev
});

module.exports = withPWA({
  reactStrictMode: true, // Tryb ścisły Reacta
  images: {
    domains: ["example.com"], // Dozwolone domeny dla obrazów
    formats: ["image/webp"], // Obsługa formatu WebP
  },
});
