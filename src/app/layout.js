import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Mobank",
  description: "Mobile Banking app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-montserrat">{children}</body>
      </html>
    </ClerkProvider>
  );
}
