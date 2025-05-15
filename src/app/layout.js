
import './globals.css';
import Navbar from './app/Navbar';
import Footer from './app/Footer';

export const metadata = {
  title: 'MegaMart',
  description: 'Your one-stop shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
