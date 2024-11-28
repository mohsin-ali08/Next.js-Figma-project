import BodySection from "@/components/Bodysection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div>
      <Navbar />
     <HeroSection/>
     <BodySection/>
     <Footer/>
      {/* Other page content */}
    </div>
  );
}
