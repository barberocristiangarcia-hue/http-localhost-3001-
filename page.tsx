import Navbar from "@/components/Navbar";
import HeroScrollStory from "@/components/HeroScrollStory";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroScrollStory />
      <Gallery />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
