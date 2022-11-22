import "./globals.css";

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
          className="h-screen w-screen fixed inset-0 opacity-[0.08] pointer-events-none"
        />
        {children}
      </body>
    </html>
  );
}
