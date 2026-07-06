import { Noto_Sans_Tamil } from "next/font/google";

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export default function TamilLayout({ children }) {
  return <div className={notoSansTamil.variable}>{children}</div>;
}
