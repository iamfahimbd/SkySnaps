import localFont from "next/font/local";
import Image from "next/image";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sky Snaps",
  description: "Weather latest Updates",
};

export default function RootLayout({ children, aqi, weather, wind, temp }) {
  return (
    <div className="wrapper">
      <div className="overlay relative h-screen w-full z-10"></div>
      <Image
      fill
        src="/background.png"
        alt="skysnaps"
        className="bg-img"
        
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}

            {aqi}
            {temp}

            {wind}

            {weather}
          </div>
        </div>
      </main>
    </div>
  );
}
