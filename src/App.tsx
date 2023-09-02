import { useEffect } from "react";

import Elements from "./Elements/Elements";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Intro from "./Elements/Intro";
import Ready from "./Elements/Ready";
import Sections from "./Elements/Sections";

const App = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className=" overflow-x-hidden">
      <Header />
      <Intro />
      <Elements />
      <Sections />
      <Ready />
      <Footer />
    </main>
  );
};

export default App;
