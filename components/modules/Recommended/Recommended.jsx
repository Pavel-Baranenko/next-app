"use client"
import { useState } from 'react';

export default function Recommended() {

  const [popup, openPopup] = useState(false);
  return (
    <>
      <div className="container">
        <div className="offerings__wrapper">
          <div className="offerings">
            <div className="offerings__item-wrapper">
              <div className="offerings__item">
                <div className="user-up">
                  <img src="./img/user-up.svg" alt="" />
                </div>
                <img src="./img/avatr-9.png" alt="" className="offerings__img" />
                <div className="offerings__item-info">
                  <div className="offerings__item-name">
                    <span>Константин Гриндин</span>
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
                <div className="offerings__item-right">
                  <div className="offerings__item-date">Откликнулась 7 мая 20:24</div>
                  <button className="offerings__item-btn">
                    <img src="./img/offerings__item-btn.svg" alt="" />
                  </button>
                  <button className="offerings__item-btn mob">
                    <img src="./img/menu-offer.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="offerings__item-about">
                <div className="offerings-about__item">
                  <span>Город</span>
                  <p>Москва</p>
                </div>
                <div className="offerings-about__item">
                  <span>Специализация</span>
                  <p>
                    Квартира / Апартаменты / Пентхаус / Лофт / Коттедж / Участок земли / Остров / Виноградник
                  </p>
                </div>
                <div className="offerings-about__contacts">
                  <div className="offerings-contacts-box">
                    <button className="open-offer-cont btn-reset">Открыть контакты</button>
                  </div>
                  <div className="offerings-about-right">
                    <button className="offerings-about-btn btn-reset">
                      Написать в чат

                    </button>
                    <button className="offerings-about-fav btn-reset">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99916 1.77482L7.27733 5.24388L7.2758 5.24695C7.07512 5.64669 6.69371 5.9251 6.25398 5.9965L6.24137 5.99855L6.24135 5.99844L2.3978 6.55546L5.19252 9.2492L5.19543 9.25202C5.51895 9.56725 5.6659 10.022 5.58972 10.4658L5.58917 10.469L4.91921 14.2743L8.3675 12.4665C8.771 12.2487 9.25605 12.2495 9.65873 12.4661L13.0942 14.2665L12.4266 10.4741C12.3421 10.0248 12.492 9.56187 12.8243 9.2472L15.5966 6.55489L11.757 5.99844L11.7531 5.99788L11.7531 5.99787C11.3061 5.93073 10.9197 5.64903 10.72 5.24199L8.99916 1.77482ZM8.56012 0.195843C8.90664 0.0801388 9.28601 0.106604 9.61448 0.272015C9.88037 0.405303 10.0951 0.619212 10.2302 0.881377L10.2354 0.891464L10.2353 0.891502L12.038 4.5235L16.0616 5.10661C16.4257 5.15601 16.7526 5.34919 16.9726 5.63923C17.3932 6.19078 17.3311 6.97285 16.827 7.45093L13.9152 10.2787L14.6177 14.2686C14.6189 14.2757 14.6201 14.2828 14.6211 14.2899C14.7298 15.0307 14.2268 15.7227 13.487 15.8451L13.4801 15.8463L13.4801 15.8462C13.1861 15.8921 12.8853 15.8448 12.6203 15.7115L12.6091 15.7058L12.6092 15.7058L9.01342 13.8215L5.39379 15.7192L5.38295 15.7249L5.38291 15.7248C4.71442 16.0615 3.90604 15.8068 3.54529 15.16L3.53704 15.1449C3.39757 14.8807 3.34628 14.5753 3.39588 14.2761L3.39711 14.2686L3.39714 14.2686L4.09954 10.2791L1.1628 7.44844L1.15369 7.43966L1.15377 7.43959C0.616448 6.90392 0.615693 6.03517 1.14982 5.49775L1.15143 5.49613L1.15293 5.49463C1.16128 5.48628 1.16983 5.47813 1.17857 5.47018C1.38155 5.28551 1.63506 5.15873 1.9116 5.11056C1.91862 5.10934 1.92566 5.10822 1.93271 5.1072L5.96029 4.5235L7.76177 0.893943C7.92283 0.564389 8.21026 0.311912 8.56012 0.195843Z" fill="#4E6AF3" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="offerings__item-wrapper">
              <div className="offerings__item">

                <img src="./img/avatr-9.png" alt="" className="offerings__img" />
                <div className="offerings__item-info">
                  <div className="offerings__item-name">
                    <span>Константин Гриндин</span>
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
                <div className="offerings__item-right">
                  <div className="offerings__item-date">Откликнулась 7 мая 20:24</div>
                  <button className="offerings__item-btn">
                    <img src="./img/offerings__item-btn.svg" alt="" />
                  </button>
                  <button className="offerings__item-btn mob">
                    <img src="./img/menu-offer.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="offerings__item-about">
                <div className="offerings-about__item">
                  <span>Город</span>
                  <p>Москва</p>
                </div>
                <div className="offerings-about__item">
                  <span>Специализация</span>
                  <p>
                    Квартира / Апартаменты / Пентхаус / Лофт / Коттедж / Участок земли / Остров / Виноградник
                  </p>
                </div>
                <div className="offerings-about__contacts">
                  <div className="offerings-contacts-box">
                    <button className="open-offer-cont btn-reset">Открыть контакты</button>
                  </div>
                  <div className="offerings-about-right">
                    <button className="offerings-about-btn btn-reset">
                      Написать в чат

                    </button>
                    <button className="offerings-about-fav btn-reset">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99916 1.77482L7.27733 5.24388L7.2758 5.24695C7.07512 5.64669 6.69371 5.9251 6.25398 5.9965L6.24137 5.99855L6.24135 5.99844L2.3978 6.55546L5.19252 9.2492L5.19543 9.25202C5.51895 9.56725 5.6659 10.022 5.58972 10.4658L5.58917 10.469L4.91921 14.2743L8.3675 12.4665C8.771 12.2487 9.25605 12.2495 9.65873 12.4661L13.0942 14.2665L12.4266 10.4741C12.3421 10.0248 12.492 9.56187 12.8243 9.2472L15.5966 6.55489L11.757 5.99844L11.7531 5.99788L11.7531 5.99787C11.3061 5.93073 10.9197 5.64903 10.72 5.24199L8.99916 1.77482ZM8.56012 0.195843C8.90664 0.0801388 9.28601 0.106604 9.61448 0.272015C9.88037 0.405303 10.0951 0.619212 10.2302 0.881377L10.2354 0.891464L10.2353 0.891502L12.038 4.5235L16.0616 5.10661C16.4257 5.15601 16.7526 5.34919 16.9726 5.63923C17.3932 6.19078 17.3311 6.97285 16.827 7.45093L13.9152 10.2787L14.6177 14.2686C14.6189 14.2757 14.6201 14.2828 14.6211 14.2899C14.7298 15.0307 14.2268 15.7227 13.487 15.8451L13.4801 15.8463L13.4801 15.8462C13.1861 15.8921 12.8853 15.8448 12.6203 15.7115L12.6091 15.7058L12.6092 15.7058L9.01342 13.8215L5.39379 15.7192L5.38295 15.7249L5.38291 15.7248C4.71442 16.0615 3.90604 15.8068 3.54529 15.16L3.53704 15.1449C3.39757 14.8807 3.34628 14.5753 3.39588 14.2761L3.39711 14.2686L3.39714 14.2686L4.09954 10.2791L1.1628 7.44844L1.15369 7.43966L1.15377 7.43959C0.616448 6.90392 0.615693 6.03517 1.14982 5.49775L1.15143 5.49613L1.15293 5.49463C1.16128 5.48628 1.16983 5.47813 1.17857 5.47018C1.38155 5.28551 1.63506 5.15873 1.9116 5.11056C1.91862 5.10934 1.92566 5.10822 1.93271 5.1072L5.96029 4.5235L7.76177 0.893943C7.92283 0.564389 8.21026 0.311912 8.56012 0.195843Z" fill="#4E6AF3" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="offerings__item-wrapper">
              <div className="offerings__item">
                <div className="user-up">
                  <img src="./img/user-up.svg" alt="" />
                </div>
                <img src="./img/avatr-9.png" alt="" className="offerings__img" />
                <div className="offerings__item-info">
                  <div className="offerings__item-name">
                    <span>Константин Гриндин</span>
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
                <div className="offerings__item-right">
                  <div className="offerings__item-date">Откликнулась 7 мая 20:24</div>
                  <button className="offerings__item-btn">
                    <img src="./img/offerings__item-btn.svg" alt="" />
                  </button>
                  <button className="offerings__item-btn mob">
                    <img src="./img/menu-offer.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="offerings__item-about">
                <div className="offerings-about__item">
                  <span>Город</span>
                  <p>Москва</p>
                </div>
                <div className="offerings-about__item">
                  <span>Специализация</span>
                  <p>
                    Квартира / Апартаменты / Пентхаус / Лофт / Коттедж / Участок земли / Остров / Виноградник
                  </p>
                </div>
                <div className="offerings-about__contacts">
                  <div className="offerings-contacts-box">
                    <button className="open-offer-cont btn-reset">Открыть контакты</button>
                  </div>
                  <div className="offerings-about-right">
                    <button className="offerings-about-btn btn-reset">
                      Написать в чат

                    </button>
                    <button className="offerings-about-fav btn-reset">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99916 1.77482L7.27733 5.24388L7.2758 5.24695C7.07512 5.64669 6.69371 5.9251 6.25398 5.9965L6.24137 5.99855L6.24135 5.99844L2.3978 6.55546L5.19252 9.2492L5.19543 9.25202C5.51895 9.56725 5.6659 10.022 5.58972 10.4658L5.58917 10.469L4.91921 14.2743L8.3675 12.4665C8.771 12.2487 9.25605 12.2495 9.65873 12.4661L13.0942 14.2665L12.4266 10.4741C12.3421 10.0248 12.492 9.56187 12.8243 9.2472L15.5966 6.55489L11.757 5.99844L11.7531 5.99788L11.7531 5.99787C11.3061 5.93073 10.9197 5.64903 10.72 5.24199L8.99916 1.77482ZM8.56012 0.195843C8.90664 0.0801388 9.28601 0.106604 9.61448 0.272015C9.88037 0.405303 10.0951 0.619212 10.2302 0.881377L10.2354 0.891464L10.2353 0.891502L12.038 4.5235L16.0616 5.10661C16.4257 5.15601 16.7526 5.34919 16.9726 5.63923C17.3932 6.19078 17.3311 6.97285 16.827 7.45093L13.9152 10.2787L14.6177 14.2686C14.6189 14.2757 14.6201 14.2828 14.6211 14.2899C14.7298 15.0307 14.2268 15.7227 13.487 15.8451L13.4801 15.8463L13.4801 15.8462C13.1861 15.8921 12.8853 15.8448 12.6203 15.7115L12.6091 15.7058L12.6092 15.7058L9.01342 13.8215L5.39379 15.7192L5.38295 15.7249L5.38291 15.7248C4.71442 16.0615 3.90604 15.8068 3.54529 15.16L3.53704 15.1449C3.39757 14.8807 3.34628 14.5753 3.39588 14.2761L3.39711 14.2686L3.39714 14.2686L4.09954 10.2791L1.1628 7.44844L1.15369 7.43966L1.15377 7.43959C0.616448 6.90392 0.615693 6.03517 1.14982 5.49775L1.15143 5.49613L1.15293 5.49463C1.16128 5.48628 1.16983 5.47813 1.17857 5.47018C1.38155 5.28551 1.63506 5.15873 1.9116 5.11056C1.91862 5.10934 1.92566 5.10822 1.93271 5.1072L5.96029 4.5235L7.76177 0.893943C7.92283 0.564389 8.21026 0.311912 8.56012 0.195843Z" fill="#4E6AF3" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
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
