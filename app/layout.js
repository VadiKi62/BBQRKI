import "./globals.css";
import "../common/animations.css";
import Link from "next/link";
import generateStylesheetObject from "@/common/generateStylesheetsObject";

export const metadata = {
  title: "BBQ=>KI",
  description: "BBQ=>QR for everything you need!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    other: generateStylesheetObject([
      // 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      // 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      // 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      "https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap",
      "https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700;800&family=Arima:wght@600&family=Caudex&family=Fira+Code&family=Fira+Mono&family=Gruppo&family=Inter:wght@200;400;700&family=Josefin+Sans:wght@300;400;500;600&family=Literata:opsz,wght@7..72,400;7..72,600&family=Major+Mono+Display&family=Mrs+Saint+Delafield&family=Noto+Sans+Display:wght@300;400;500&family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&family=Odibee+Sans&display=swap",
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div style={{ paddingTop: 1 }}>
          <Link href="/">
            <p id="root-layout">BB QR Code</p>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
