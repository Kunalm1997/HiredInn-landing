import Banner from "@/components/banner";
import Choose from "@/components/choose";
import FAQAccordion from "@/components/faq/FAQAccordion";
import FeaturesOne from "@/components/featureOne";
import Footer from "@/components/footer";
import Howitworks from "@/components/howitworks";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import TryFree from "@/components/tryFree";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Banner />
      {/* <Choose /> */}
      <FeaturesOne />
      {/* <Howitworks /> */}
      <TryFree />
      <FAQAccordion />
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}
