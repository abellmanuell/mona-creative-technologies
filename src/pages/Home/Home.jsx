import { About } from "../../partials/About/About";
import { Contact } from "../../partials/Contact/Contact";
import { Footer } from "../../partials/Footer/Footer";
import { Header } from "../../partials/Header/Header";
import { Helmet } from "react-helmet-async";
import { Hero } from "../../partials/Hero/Hero";
import { Services } from "../../partials/Services/Services";
import { WhyUs } from "../../partials/WhyUs/WhyUs";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
