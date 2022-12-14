import React from "react";
import "./navBar.scss";
import { ReactComponent as InstLogo } from "../../../assets/svg/instagram.svg";
import { ReactComponent as TelegramLogo } from "../../../assets/svg/telegram.svg";
import { ReactComponent as WhatsLogo } from "../../../assets/svg/whatsapp.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentTrainerData } from "../../../store/trainers";
const NavBar = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

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
                <NavLink to="/diary" className="href">
                  Дневник
                </NavLink>
              </span>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/rewiews" className="href">
                Отзывы
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/nutrition" className="href">
                Питание
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/workouts" className="href">
                Тренировки
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/" className="href">
                ABOUT
              </NavLink>
            </div>
            <div className="header__item headerButton">
              {currentTrainer ? (
                <NavLink to="/trainerPage" className="href">
                  {currentTrainer.name}
                </NavLink>
              ) : (
                <NavLink to="/login/signin" className="href">
                  Войти
                </NavLink>
              )}
            </div>
          </menu>
        </div>
      </header>
    </>
  );
};
export default NavBar;
