import { Noto_Sans_Sinhala } from "next/font/google";

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sinhala",
  display: "swap",
});

export default function SinhalaLayout({ children }) {
  return <div className={notoSansSinhala.variable}>{children}</div>;
}
