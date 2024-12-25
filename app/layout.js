import { Anton, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400", // Correction: utiliser le poids 400
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "xmass",
  description: "Developped by the code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}