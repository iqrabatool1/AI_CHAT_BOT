export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* This CDN loads Tailwind instantly without needing complex config */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}