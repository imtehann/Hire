import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hire — Bangladesh's AI-Powered Freelance Marketplace",
  description: "Connect with top Bangladeshi freelancers or find your next client. AI-powered matching, bKash/Nagad payments, trusted escrow.",
  keywords: "freelance bangladesh, hire freelancer dhaka, online jobs bangladesh, bkash payment freelance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
