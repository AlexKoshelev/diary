import React from "react";
import "./navBar.scss";
import { ReactComponent as InstLogo } from "../../../assets/svg/instagram.svg";
import { ReactComponent as TelegramLogo } from "../../../assets/svg/telegram.svg";
import { ReactComponent as WhatsLogo } from "../../../assets/svg/whatsapp.svg";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header__navbar _container">
          <div className="header__icons">
            <span className="icon">
              <InstLogo />
            </span>
            <span className="icon">
              <TelegramLogo />
            </span>
            <span className="icon">
              <WhatsLogo />
            </span>
          </div>
          <menu className="header__menu">
            <div className="header__item headerButton">
              <span className="header__item-button">
                <a href="/" className="href">
                  Дневник
                </a>
              </span>
            </div>
            <div className="header__item headerButton">
              <a href="/" className="href">
                Отзывы
              </a>
            </div>
            <div className="header__item headerButton">
              <a href="/" className="href">
                Питание
              </a>
            </div>
            <div className="header__item headerButton">
              <a href="/" className="href">
                Тренировки
              </a>
            </div>
            <div className="header__item headerButton">
              <a href="/" className="href">
                ABOUT
              </a>
            </div>
            <div className="header__item headerButton">
              <a href="/" className="href">
                Войти
              </a>
            </div>
          </menu>
        </div>
      </header>
    </>
  );
};
export default NavBar;
