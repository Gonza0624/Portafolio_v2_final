import { useEffect } from "react";
import About from "./components/about/about";
import Certificates from "./components/certificates/certificates";
import ContactForm from "./components/contactForm/contactForm";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import Projects from "./components/projects/projects";
import { ThemeProvider } from "./components/themeContext/themeContext";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-EEPGJ93BDG");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ThemeProvider>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <ContactForm />
      <Certificates />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
