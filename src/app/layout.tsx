import Navbar from "../components/nav/Navbar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
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