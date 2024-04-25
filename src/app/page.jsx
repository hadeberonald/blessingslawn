import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import HeroMobile from "./components/HeroMobile/HeroMobile";
import Services from "./components/Services/Services";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Cta from "./components/Cta/Cta";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarHome/>
      <Hero/>
      <HeroMobile/>
      <Services/>
      <ImageSlider/>
      <Cta/>
      <Footer/>
    </div>
  );
}
