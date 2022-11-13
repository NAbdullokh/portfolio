import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { languageMenu } from "../../config/i18nConfig";


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
        <UncontrolledDropdown direction="down">
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
        </UncontrolledDropdown>
      </div>
    </>
  );
};

export default LanguageDropdownComponent;
