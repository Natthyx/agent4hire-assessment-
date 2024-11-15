import MainLayout from "./components/layout/MainLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <MainLayout>
        {children}
          </MainLayout>
        </main>
      </body>
    </html>
  );
}
