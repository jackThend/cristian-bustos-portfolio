import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Work />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}