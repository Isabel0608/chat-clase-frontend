
export const metadata = {
  title: "Chat - APP",
  icons: {
    icon: "img/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"> {}
      <body style={{ margin: 0, fontFamily: "'Arial', sans-serif", backgroundColor: "#f3e5f5" }}>
        {children}
      </body>
    </html>
  );
}
