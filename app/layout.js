import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata = {
  title: "MaxDine-POS | Smart POS for Restaurants",
  description:
    "All-in-one restaurant POS website showcasing analytics, operations, and kitchen integration."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
