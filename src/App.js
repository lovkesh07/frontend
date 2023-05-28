import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Ourservices from "./components/basiccomp/Ourservices";
import Sponser from "./components/basiccomp/Sponser";
import Longcard from "./components/basiccomp/Longcard";
import Ourmission from "./components/writenpart/Ourmission";
import Cards from "./components/Cards";
import { Testimonials } from "./components/Testimonial/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Ourservices />
      <Ourmission />

      <Longcard />
      <Sponser />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
