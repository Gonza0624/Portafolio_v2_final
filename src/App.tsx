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
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <main>
        <Navigation />
        <Home />
        <About />
        <Objective />
        <MainSkills />
        <Projects />
        <ContactForm />
        <Certificates />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
