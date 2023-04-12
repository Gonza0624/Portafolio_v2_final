import About from "./components/about/about";
import Certificates from "./components/certificates/certificates";
import ContactForm from "./components/contactForm/contactForm";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import Objective from "./components/objective/objective";
import Projects from "./components/projects/projects";
import MainSkills from "./components/skills/mainSkills";
import { ThemeProvider } from "./components/themeContext/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <Home />
      <About />
      <Objective />
      <MainSkills />
      <Projects />
      <ContactForm />
      <Certificates />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
