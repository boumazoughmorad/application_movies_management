import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "Movies",
  description: "Best Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
            <Header/>
            <Navbar />
            <SearchBox />
            {children}
        </Providers>
      </body>
    </html>
  );
}
