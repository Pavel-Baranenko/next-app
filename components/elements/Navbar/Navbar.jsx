"use client"

import { useState } from 'react';



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header__navbar">
        <div className={`leads__list-container ${open ? "open-leads-list" : ""}`}>
          <div className="leads__list">
            <div className="leads__list-item">
              <img src="./img/objects.svg" alt="" />
              <div className="leads__list-wrap">
                <span>Покупатели</span>
                <p>Заявки на покупку</p>
              </div>
            </div>
            <div className="leads__list-item">
              <img src="./img/key.svg" alt="" />
              <div className="leads__list-wrap">
                <span>Арендаторы</span>
                <p>Заявки на аренду</p>
              </div>
            </div>
            <div className="leads__list-item">
              <img src="./img/peoples.svg" alt="" />
              <div className="leads__list-wrap">
                <span>Собственники</span>
                <p>Заявки на продажу</p>
              </div>
            </div>
            <div className="leads__list-item">
              <img src="./img/files-desk.svg" alt="" />
              <div className="leads__list-wrap">
                <span>Мои заявки</span>
                <p>Заявки, созданные мной</p>
              </div>
            </div>
            <button className="btn-reset leads__list-add blue-hover">
              Создать заявку
            </button>
          </div>
        </div>
        <button className="btn-reset navbar__btn navbar__btn--leads"
          onClick={() => { setOpen(!open) }}
        ><span>заявки</span></button>
        {/* <button className="btn-reset navbar__btn navbar__btn--objects In__development"><span>объекты</span></button> */}
        <button className="btn-reset navbar__btn navbar__btn--about In__development"><span>О нас</span></button>
        <button className="btn-reset navbar__btn navbar__btn--rieltors In__development"><span>риелторам</span></button>
        <button className="btn-reset navbar__btn navbar__btn--faq In__development"><span>FAQ</span></button>
        {/* <button className="btn-reset navbar__btn navbar__btn--learns In__development"><span>база знаний</span></button> */}
      </div>
    </>
  )
}

export default Navbar;