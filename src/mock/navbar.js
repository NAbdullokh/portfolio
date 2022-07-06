import { About } from "../components/about";
import { Contact } from "../components/contacts";
import { Main } from "../components/main";
import { Portfolio } from "../components/portfolio";
import { Skills } from "../components/skills";

export const navbar = [
  { id: 1, element: <Main />, link: "/", title: "Home" },
  { id: 2, element: <About />, link: "/about", title: "About me" },
  { id: 3, element: <Skills />, link: "/skills", title: "Skills" },
  { id: 4, element: <Portfolio />, link: "/portfolio", title: "Portfolio" },
  { id: 5, element: <Contact />, link: "/contact", title: "Contacts" },
];

export default navbar;
