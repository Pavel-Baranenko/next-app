import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileInfo() {
  const [read, setRead] = useState(false)
  const readMore = () => {
    if (read === false) {
      setRead(true)
    } else {
      setRead(false)
    }
  }
  return (
    <>
      <div className="container">

        <div className="profile__body-head">
          <div className="profile__body-top">
            <img src="./img/avatar.png" alt="" className='profilepic' />
            <div className="profile__info">
              <div className="profile__info-left">
                <div className="profile__info-name">Светлана Гридасова</div>
                <div className="profile__info-role">Клиент</div>
                <div className="profile__info-loc">Россия / Москва</div>
                <div className="profile__info-pass">Паспорт подтвержден</div>
                <div className="profile__info-feeds">
                  <span>4.8</span><div className="feeds">28 отзывов</div>
                </div>
              </div>
              <div className="profile__info-right">
                <div className="profile__info-id">ID: <span>2348212</span></div>
                <div className="profile__info-insite">На сайте: <span>8 месяцев</span></div>
              </div>
            </div>
          </div>
          <div className="profile__body-contacts">
            <a className='profile-contact tel' href="">+7 919 777-77-77</a>
            <Link className='profile-contact tg' href="">Telegram</Link>
            <Link className='profile-contact ws' href="">WhatsApp</Link>
            <Link className='profile-contact vb' href="">Viber</Link>
            <Link className='profile-contact zm' href="">Zoom</Link>
          </div>
        </div>
        <div className="profile-info-wrap">
          <div className="profile__info-box white-box">
            <div className="profile__info-item">
              <span>176</span>
              <p>Отправлено предложений</p>
            </div>
            <div className="profile__info-item">
              <span>19</span>
              <p>Получено предложений</p>
            </div>
            <div className="profile__info-item">
              <span>45</span>
              <p>Получено контактов</p>
            </div>
            <div className="profile__info-item">
              <span>16</span>
              <p>Совершено сделок</p>
            </div>
            <div className="profile__info-item">
              <span>0</span>
              <p>Создано объектов</p>
            </div>
            <div className="profile__info-item">
              <span>228</span>
              <p>Просмотров профиля</p>
            </div>
          </div>
        </div>

        <div className="about white-box">
          <div className="section-head">
            <h4 className='section-head__title'>О себе</h4>
          </div>
          <div className="about__box">
            <div className={read ? "readmore-box readmore-open" : "readmore-box"}>
              <div className="readmore">
                <p>Отзывы моих клиентов говорят о моем функционале на всех этапах сотрудничества намного лучше чем я сама могу рассказать, когда клиент обращается ко мне либо к любому другому специалисту он хочет получить качественные услуги (это правило я усвоила много лет назад) именно поэтому каждый новый клиент который сотрудничает со мной получает намного больше чем просто услугу, я с удовольствием делюсь своими знаниями.
                  Я сама могу рассказать, когда клиент обращается ко мне либо к любому другому специалисту он хочет получить качественные услуги (это правило я усвоил много лет назад) именно поэтому каждый новый клиент который сотрудничает со мной получает намного больше чем просто услугу, я с удовольствием делюсь своими</p>
              </div>
              <button className='btn-reset readmore-btn' onClick={readMore}>Открыть ещё</button>
            </div>
          </div>

          <div className="video">
            <h6 className="video-heading">Видео<span>1</span></h6>
            <div className="video-box">
              <div className="video-item">
                <img src="./img/video.png" alt="Video preview" />
                <button className='video-play-video'></button>
              </div>
            </div>
          </div>
        </div>
        <div className="estate white-box">

          <div className="estate-title">Параметры недвижимости</div>
          <div className="profile-line">Параметры недвижимости, которой сейчас занимаюсь</div>

          <div className="estate-grid">
            <div className="estate-item">
              <span className="estate-item-title">Город недвижимости</span>
              <div className="estate-item-list">
                <div className="estate-list__item">Москва</div>
                <div className="estate-list__item">Санкт-Петербург</div>
              </div>
            </div>
            <div className="estate-item">
              <span className="estate-item-title">Формат сделки</span>
              <div className="estate-item-list">
                <div className="estate-list__item">Покупка</div>
              </div>
            </div>
            <div className="estate-item">
              <span className="estate-item-title">Тип недвижимости</span>
              <div className="estate-item-list">
                <div className="estate-list__item">Квартира</div>
                <div className="estate-list__item">Апартаменты</div>
                <div className="estate-list__item">Дуплекс</div>
                <div className="estate-list__item">Вилла</div>
                <div className="estate-list__item">Пентхаус</div>
                <div className="estate-list__item">Коттедж</div>
                <div className="estate-list__item">Особняк</div>
                <div className="estate-list__item">Виноградник</div>
                <div className="estate-list__item">Остров</div>
              </div>
            </div>
            <div className="estate-item">
              <span className="estate-item-title">Состояние</span>
              <div className="estate-item-list">
                <div className="estate-list__item">Новая</div>
              </div>
            </div>
          </div>
        </div>
        <div className="license white-box">
          <div className="section-head">
            <h4 className='section-head__title'>Лицензии и сертификаты <span>2</span></h4>
          </div>
          <div className="license-box">
            <div className="license-item">
              <img src="./img/license.jpg" alt="" />
            </div>
          </div>
        </div>
        <button className="settings-profile"><span>Редактировать профиль</span></button>
      </div>
    </>
  )
}
