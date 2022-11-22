import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-black text-gray-700">
        <div
          style={{ backgroundImage: "url('/noise.png')" }}
          className="h-screen w-screen fixed inset-0 opacity-[0.08]"
        />
        {children}
      </body>
    </html>
  );
}
