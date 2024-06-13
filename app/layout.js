import "../styles/globals.css";

export const metadata = {
  title: "Ai DealsBajaar",
  description: "AI Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <main>
      {children}
        </main>
      </body>
    </html>
  );
}
