import FooterLayout from '@/components/layout/FooterLayout';
import Navbar from '@/components/layout/Navbar';
import "../style/globals.css"
import '../lib/fontawesome'



export const metadata = {
  title: 'Tailwind App',
  description: 'Styled with Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
