import "./globals.css";
import { Roboto } from 'next/font/google';
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500", "700"]
});


interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;