import "./globals.css";

export const metadata = {
  title: "Botara Moderation",
  description: "Advanced Discord moderation bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
