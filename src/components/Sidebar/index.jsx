import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Cateogry } from "../../context/context";
import { navItems } from "../../mock/navItems";
import { Container, ItemsWrapper, TitleWrapper } from "../Navbar/style";
import { Wrapper } from "./style";

const Sidebar = () => {
  const { t } = useTranslation();
  const { open, setOpen } = useContext(Cateogry);
  console.log(open);
  return (
    <Wrapper
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      type={open}
    >
      <ItemsWrapper>
        {open && (
          <TitleWrapper>
            <Container.Title1 href="#">Abdulloh</Container.Title1>
            <Container.Title2 href="#">Abdulloh</Container.Title2>
          </TitleWrapper>
        )}
        {navItems.map((value) => {
          return (
            <ItemsWrapper.Items key={value.id} href={value.path}>
              {open ? (
                <div className="sidebar">
                  {<img src={value.icon} alt={value.title} />} {value.title}
                </div>
              ) : (
                <img src={value.icon} alt={value.title} />
              )}
            </ItemsWrapper.Items>
          );
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
