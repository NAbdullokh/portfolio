import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { languageMenu } from "../../config/i18nConfig";
import { Dropdown, Button } from "antd";

const LanguageDropdownComponent = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(languageMenu[1]);

  const handleOnLanguageMenuItemSelected = (item) => {
    if (language.id !== item.id) {
      setLanguage(item);
      i18n.changeLanguage(item.code);
    }
  };

  useEffect(() => {
    const detectedLanguageMenu = languageMenu.find((l) =>
      i18n.language.includes(l.code)
    );

    setLanguage(detectedLanguageMenu);
  }, [i18n.language]);

  const options = languageMenu.filter((item) => language.id !== item.id);

  return (
    <>
      <div className="nav-item ">
        {/* <UncontrolledDropdown direction="down">
          <DropdownToggle
            color="transparent"
            className="dropdown-toggle dropdown-indicator has-indicator nav-link"
          >
            <img
              src={language.icon}
              alt={language.title}
              className="language-flag"
            />
            <span>{language.title}</span>
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-sm">
            <ul className="language-list">
              {options.map((option) => (
                <li
                  key={option?.id}
                  onClick={() => handleOnLanguageMenuItemSelected(option)}
                >
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="language-item"
                  >
                    <img
                      src={option.icon}
                      alt={option.title}
                      className="language-flag"
                    />
                    <span className="language-name">{option.title}</span>
                  </DropdownItem>
                </li>
              ))}
            </ul>
          </DropdownMenu>
          {/* </UncontrolledDropdown> */}
        {languageMenu.map((value) => {
          return (
            <div style={{ color: "white", display: "flex" }}>
              <h4
                key={value?.id}
                onClick={() => handleOnLanguageMenuItemSelected(value)}
              >
                {value.title}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LanguageDropdownComponent;
