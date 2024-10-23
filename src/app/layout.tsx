import Navbar from "../components/nav/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto", // Define custom variable for Roboto
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={roboto.variable}> {/* Apply the font variable to html */}
      <body>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;