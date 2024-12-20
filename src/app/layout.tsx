import { Inter } from "next/font/google";
import Navbar from "../components/nav/Navbar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: "booze o'clock",
  description: "Generated by create next app",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
