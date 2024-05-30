import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Kulture Event Center",
  description:
    "Kulture Event Center is a premier event space in the heart of downtown Houston. We offer a variety of event spaces for weddings, corporate events, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>

      {/* Include the first external script */}

      <Script
        src="https://embed.tawk.to/66439ce79a809f19fb30e271/1hts1pq70"
        strategy="afterInteractive" // Load script after hydration
        charSet="UTF-8"
        crossOrigin="*"
      />

      {/* Include the second external script */}

      {/* <Script
        src="https://utt.impactcdn.com/P-A5462282-12a4-411d-8ac4-fbf35198c56a1.js"
        strategy="afterInteractive"
        charSet="UTF-8"
        crossOrigin="*"
      /> */}
    </html>
  );
}
