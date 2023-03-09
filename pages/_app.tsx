import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ['400', '500'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubikFont.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
