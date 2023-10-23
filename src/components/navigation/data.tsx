import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
    id: 2,
    url: "about",
    text: "About",
  },
  {
    id: 3,
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
    id: 6,
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
    id: 1,
    url: "https://www.linkedin.com/in/gonzalo-salazar-carvajal-965284218/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/Gonza0624",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://mail.google.com/mail/?view=cm&to=gonzalosalazar1180@gmail.com",
    icon: (
      <HiOutlineMail
        title="gonzalosalazar1180@gmail.com"
        className="icon-email"
      />
    ),
  },
];
