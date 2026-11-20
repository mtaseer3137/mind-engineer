import '../index.css';

export const metadata = {
  title: 'Mind Engineer | Unlock Your Mind. Transform Your Life.',
  description:
    'Academic Demonstration Project — A thoughtful synthesis of engineering precision, sports psychology, and mind sciences. Designed to foster sustainable focus, emotional composure, and authentic personal reinvention.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F3EA] text-[#292D29] font-sans selection:bg-[#879B83]/30 selection:text-[#354B3B] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
