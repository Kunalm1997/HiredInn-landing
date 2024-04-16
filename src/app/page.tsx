import Banner from "@/components/banner";
import Choose from "@/components/choose";
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
      <Choose />
      <Howitworks />
      <TryFree />
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}
