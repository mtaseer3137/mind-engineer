import { Playfair_Display, DM_Sans } from 'next/font/google';
import '../index.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Mind Engineer | Unlock Your Mind. Transform Your Life.',
  description:
    'Academic Demonstration Project — A thoughtful synthesis of engineering precision, sports psychology, and mind sciences. Designed to foster sustainable focus, emotional composure, and authentic personal reinvention.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F5F3EA] text-[#292D29] font-sans selection:bg-[#879B83]/30 selection:text-[#354B3B] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
