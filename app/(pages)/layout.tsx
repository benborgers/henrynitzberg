import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-black">
        <div
          style={{ backgroundImage: "url('/noise.png')" }}
          className="h-screen w-screen fixed inset-0 opacity-[0.08] pointer-events-none -z-10"
        />
        {children}

        <Script
          src="https://owl.benborgers.com/script.js"
          data-site="IDHNIEZW"
          data-included-domains="henrynitzberg.com"
          data-spa="auto"
          defer
        />
      </body>
    </html>
  );
}
