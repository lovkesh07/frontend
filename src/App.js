import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Ourservices from "./components/basiccomp/Ourservices";
import Sponser from "./components/basiccomp/Sponser";
import Longcard from "./components/basiccomp/Longcard";
import Ourmission from "./components/writenpart/Ourmission";

function App() {
  return (
    <>
      <Navbar />
      <Ourmission/>

      <Longcard/>
      <Sponser/>
      <Footer />
    </>
  );
}

export default App;
