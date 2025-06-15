import "./globals.css";
import { Space_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "TechBastic - Learn, Build, Collaborate",
  description:
    "An open-source community helping you to become a self-taught developer!",
  keywords: [
    "techbastic",
    "tech-bastic",
    "tech",
    "bastic",
    "technology",
    "community",
    "events",
    "networking",
    "learning",
    "collaboration",
    "open-source",
    "self-taught",
    "developer",
    "github",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
