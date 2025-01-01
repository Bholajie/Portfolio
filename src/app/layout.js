import { Inter } from "next/font/google";
import "./globals.css";
import TransistionProvider from "@/components/transistionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BolajiX Portfolio App",
  description: "BolajiX Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransistionProvider>{children}</TransistionProvider>
      </body>
    </html>
  );
}
