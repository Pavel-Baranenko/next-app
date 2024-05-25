"use client"
import Navbar from "@/components/elements/Navbar/Navbar";
import RightSide from "@/components/elements/RightSide/RightSide";
import Link from "next/link";
import React, { useState } from 'react';


const Header = () => {
  const [menu, setMenu] = useState(false)

  const head = () => {
    if (localStorage.getItem('token').length > 0) return true;
    else return false

  }

  return (
    <>
      {/* {head && <header className="header__container">
        <Link href="/" className="header__logo"><img src="./img/logo.svg" alt="Umnoj logo" /></Link>
        <Navbar />
        <RightSide />
      </header>} */}

      {head && <header className="header__container">
        <button className="btn-reset menu__open" onClick={() => { setMenu(true) }}><img src="./img/Btn.svg" alt="" /></button>
        <Link href="/" className="header__logo"><img src="./img/logo.svg" alt="Umnoj logo" /></Link>
        <Navbar className="navbar" />
        <RightSide />
      </header>}
      <div className={menu ? "mob-menu open" : "mob-menu cloose"}>
        <div className="menu__inner">
          <div className="mob-menu__top">
            <div className="cloose__btn" onClick={() => { setMenu(false) }}>
              <div className="cloose__btn-inner"></div>
            </div>
            <Link href="/" className="header__logo"><img src="./img/logo.svg" alt="Umnoj logo" /></Link>
          </div>
          <ul className="menu__list">
            <li className="meni__list-item">Заявки</li>
            <li className="meni__list-item">О нас</li>
            <li className="meni__list-item">Риелторам</li>
            <li className="meni__list-item">FAQ</li>
            <li className="meni__list-item">ПОЛУЧИТЬ ПОДБОРКУ</li>
            <li className="meni__list-item">ПОДПИСАТЬСЯ НА РАССЫЛКУ</li>
            <li className="meni__list-item">
              <Link href="/auth">РЕГИСТРАЦИЯ</Link>
            </li>
            <li className="meni__list-item">
              <Link href="/login">ВХОД</Link>
            </li>
          </ul>
        </div>

        <div className="menu__bottom">
          <p>Свяжитесь с нами прямо сейчас! Мы работаем 7 дней в неделю и сейчас <span className="green">онлайн</span></p>
          <div className="menu__socials">
            <a href="./" className="tg">
              <img src="./img/tg.svg" alt="Tg" />
              <span>Telegram</span>
            </a>
            <a href="./" className="vk"><img src="./img/vk.svg" alt="VK" /></a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header;