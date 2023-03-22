import About from "./components/about/about";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import Objective from "./components/objective/objective";
import MainSkills from "./components/skills/mainSkills";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Objective />
      <MainSkills />
    </div>
  );
};

export default App;
