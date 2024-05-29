"use client"
import { useState } from 'react';

export default function Recommended() {

  const [popup, openPopup] = useState(false);
  return (
    <>
      <div className="container">
        <div className="offerings__wrapper">
          <div className="offerings">
            <div className="offerings__item">

              <img src="./img/avatar.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Ангелина Синичкина</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.8</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-contacts" onClick={() => openPopup(true)}>
                <span>Открыть контакты</span>
              </button>
            </div>
            <div className="offerings__item">

              <img src="./img/avatar.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Ангелина Синичкина</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.8</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-contacts" onClick={() => openPopup(true)}>
                <span>Открыть контакты</span>
              </button>
            </div>

            <div className="offerings__item">
              <div className="user-up">
                <img src="./img/user-up.svg" alt="" />
              </div>
              <img src="./img/avatr-7.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Валентина Антонова</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.1</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-chat">
                <span>Написать в чат</span>
              </button>
            </div>
            <div className="offerings__item">

              <img src="./img/avatar.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Ангелина Синичкина</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.8</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-contacts" onClick={() => openPopup(true)}>
                <span>Открыть контакты</span>
              </button>
            </div>
            <div className="offerings__item">

              <img src="./img/avatr-7.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Валентина Антонова</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.1</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-chat disabed">
                <span>Написать в чат</span>
              </button>
            </div>
            <div className="offerings__item">

              <img src="./img/avatar.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Ангелина Синичкина</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.8</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-open-contacts" onClick={() => openPopup(true)}>
                <span>Открыть контакты</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={popup ? "popup open" : "popup cloose"}>
        <div className="popup__wrapper popup__wrapper-cont">
          <div className="policy popup-top">
            <div className=" popup__top">
              <button className="popup__cloose" onClick={() => openPopup(false)}>
                <img src="./img/cloose__popup.svg" alt="" />
              </button>
            </div>
            <div className="popup__body">
              <div className="popup__img">
                <img src="./img/blue-tel.svg" alt="" />
              </div>

              <div className="popup__title">Открыть контакты</div>
              <div className="popup__text">Открывая контакты, вы одновременно сможете видеть контактные данные друг друга</div>
              <button className="open-contacts">Открыть контакты</button>
              <div className="not-seen">
                <input type="checkbox" name='not-seen' id='not-seen' />
                <label htmlFor="not-seen">Больше не показывать это уведомление</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
