import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "../components/ui/font";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/SideBar";
import ScrollToTop from "@/components/layout/ScrollToTop";
// import LightHouse from "@/components/layout/LightHouse";

export const metadata: Metadata = {
  title: "Irvin Osazee",
  description: "Irvin Osazee Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`selection:bg-slate-200 bg-neutral-100 overscroll-y-none ${montserrat.className} antialiased flex flex-row relative`}
      >
        <section className="fixed md:relative z-50">
          <SideBar/>
        </section>
        <section id="main" className="h-screen flex-1 pt-16 px-4 md:mt-2 md:pt-20 border md:rounded-tl-2xl bg-white overflow-y-scroll">
          {children}
          <Footer/>
        </section>
        {/* <section className="hidden md:block z-40">
          <LightHouse />
        </section> */}
        <section className="hidden md:block z-40">
          <ScrollToTop />
        </section>
      </body>
    </html>
  );
}
