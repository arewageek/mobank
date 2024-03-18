import "./globals.css";
import AuthRoutesProvider from "@/components/providers/AuthRoutesProvider";

export const metadata = {
  title: "Mobank",
  description: "Mobile Banking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthRoutesProvider>{children}</AuthRoutesProvider>
      </body>
    </html>
  );
}
