import "./globals.css";
import "../common/animations.css";
import Link from "next/link";
import generateStylesheetObject from "@common/generateStylesheetsObject";

export const metadata = {
  title: {
    default: "BB QR => KI homepage",
    template: "%s | BB QR Code ",
  },
  description: "BBQ=>QR for everything you need!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    other: generateStylesheetObject([
      // 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      // 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      // 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      "https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap",
      "https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700;800&family=Arima:wght@600&family=Caudex&family=Fira+Code&family=Fira+Mono&family=Gruppo&family=Inter:wght@200;400;700&family=Josefin+Sans:wght@300;400;500;600&family=Literata:opsz,wght@7..72,400;7..72,600&family=Major+Mono+Display&family=Mrs+Saint+Delafield&family=Noto+Sans+Display:wght@300;400;500&family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&family=Odibee+Sans&display=swap&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap&family=Petit+Formal+Script",
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ position: "relative", minHeight: "100vh" }}>
        {" "}
        {children}{" "}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <p id="root-layout">BB QR Code</p>
          <Link href="/">
            <p id="root-layout">Povered by Nataliaki</p>
          </Link>
        </div>
      </body>
    </html>
  );
}
