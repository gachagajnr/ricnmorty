import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ricnmortyapi",
  description: "api of ricnmorty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container max-w-screen-lg mx-auto">{children}</div>
      </body>
    </html>
  );
}
