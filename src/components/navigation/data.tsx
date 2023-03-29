import { FaGithub, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";

export const links: {
  id: number;
  url: string;
  text: string;
}[] = [
  {
    id: 1,
    url: "home",
    text: "Home",
  },
  {
    id: 3,
    url: "about",
    text: "About",
  },
  {
    id: 2,
    url: "skills",
    text: "Skills",
  },
  {
    id: 4,
    url: "projects",
    text: "Projects",
  },
  {
    id: 5,
    url: "contact",
    text: "Contact",
  },
  {
    id: 5,
    url: "certificates",
    text: "Certificates",
  },
];

export const social: {
  id: number;
  url: string;
  icon: JSX.Element;
}[] = [
  {
    id: 2,
    url: "https://www.linkedin.com/in/gonzalo-salazar-carvajal-965284218/",
    icon: <FaLinkedin fontSize={25} />,
  },
  {
    id: 3,
    url: "https://github.com/Gonza0624",
    icon: <FaGithub fontSize={25} />,
  },
  {
    id: 4,
    url: "https://api.whatsapp.com/send/?phone=573157304681",
    icon: <FaWhatsapp fontSize={25} />,
  },
];
