import "./App.css";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return <>
  <Header/>
  <About/>
  <Expertise/>
  <AboutMe/>
  <Portfolio/>
  <Feedback/>
  <Contact/>
  <Footer/>
  </>;
}

export default App;
