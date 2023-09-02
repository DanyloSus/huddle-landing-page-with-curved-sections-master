import Elements from "./Elements/Elements";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Intro from "./Elements/Intro";
import Ready from "./Elements/Ready";
import Sections from "./Elements/Sections";

const App = () => {
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
