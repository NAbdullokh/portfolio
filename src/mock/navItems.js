import main from "../assets/icons/grid.svg";
import pie from "../assets/icons/pie-chart.svg";
import settings from "../assets/icons/settings.svg";
import folder from "../assets/icons/folder.svg";
import user from "../assets/icons/user.svg";
import phone from "../assets/icons/phone.png";

export const navItems = [
  {
    id: 1,
    icon: main,
    title: "Home",
    path: "#home",
  },
  { id: 43, icon: user, title: "About", path: "#about" },
  { id: 23, icon: settings, title: "Skills", path: "#skills" },
  { id: 21, icon: pie, title: "Education", path: "#education" },
  {
    id: 24,
    icon: folder,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 2,
    icon: phone,
    title: "Contact",
    path: "#contact",
  },
];
