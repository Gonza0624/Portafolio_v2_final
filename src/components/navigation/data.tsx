import { FaGithub, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";

export const links: {
  id: number;
  url: string;
  text: string;
}[] = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/skills",
    text: "Skills",
  },
  {
    id: 3,
    url: "/about",
    text: "About",
  },
  {
    id: 4,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact",
  },
];

export const social: {
  id: number;
  url: string;
  icon: JSX.Element;
}[] = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook fontSize={22} />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaLinkedin fontSize={22} />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaGithub fontSize={22} />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaWhatsapp fontSize={22} />,
  },
];
