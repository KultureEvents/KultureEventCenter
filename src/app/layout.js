import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Kulture Event Center",
  description:
    "Kulture Event Center is a premier event space in the heart of downtown Houston. We offer a variety of event spaces for weddings, corporate events, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
