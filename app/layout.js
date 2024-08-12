import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import ReservationContextProvider from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col min-h-screen bg-primary-950 text-primary-100 antialiased ${josefin.className}`}
      >
        <Header />
        <div className="w-full px-8 py-12 ">
          <main className="h-full mx-auto max-w-7xl ">
            <ReservationContextProvider>{children}</ReservationContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
