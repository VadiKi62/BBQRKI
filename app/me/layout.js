import "@styles/me.css";

export const metadata = {
  title: {
    default: "Nataliaki",
  },
  description: "Web Developer Profile!",
  icons: {
    icon: "/nk.png",
  },
};

export default function MeLayout({ children }) {
  return <>{children}</>;
}
