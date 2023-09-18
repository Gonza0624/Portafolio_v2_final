import React from "react";
import { useTranslation } from "react-i18next";
import ingles from "../../assets/languages-img/en.png";
import español from "../../assets/languages-img/es.png";
import { IoIosArrowUp } from "react-icons/io";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex={1}>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="en"
            value="en"
            name="language"
            defaultChecked={i18n.language === "en"}
            onClick={() => changeLanguage("en")}
          />
          <p className="select-box__input-text">
            <img src={ingles} alt="English" />
          </p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="es"
            value="es"
            name="language"
            defaultChecked={i18n.language === "es"}
            onClick={() => changeLanguage("es")}
          />
          <p className="select-box__input-text">
            <img src={español} alt="Español" />
          </p>
        </div>
        <IoIosArrowUp className="select-box__icon" fontSize={30} />
      </div>
      <ul className="select-box__list">
        <li>
          <label className="select-box__option" htmlFor="en" aria-hidden="true">
            <div className="select-box__option-img">
              <img src={ingles} alt="ingles" />
              <span>EN</span>
            </div>
          </label>
        </li>
        <li>
          <label className="select-box__option" htmlFor="es" aria-hidden="true">
            <div className="select-box__option-img">
              <img src={español} alt="Español" />
              <span>ES</span>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
