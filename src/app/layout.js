import './globals.css';
import Navbar from './app/Navbar';
import Footer from './app/Footer';
import { CartProvider } from '@/context/CartContext'; // ✅ This is the key addition



export const metadata = {
  title: 'E-Mart',
  description: 'Buy Electronics Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
