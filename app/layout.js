import "./globals.css";



export const metadata = {
  title: "Cprg306 Assignments",
  description: "Cprg306 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
