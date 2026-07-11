import "./globals.css";

export const metadata = {
  title: "Mening Saytim",
  description: "Bu mening shaxsiy loyiham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        {children}
      </body>
    </html>
  );
}