import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", backgroundColor: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
