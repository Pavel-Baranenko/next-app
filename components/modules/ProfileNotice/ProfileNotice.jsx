import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileNotice() {
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


        <div className="wrap white-box">
          <div className="section-head">
            <h4 className='section-head__title section-heading'>Ваши уведомления</h4>
          </div>
          <div className="prifile-options">
            <div className="prifile-option__item">
              <div className="prifile-option__title">Все входящие сообщения</div>
              <input type="checkbox" className='checkbox-toggle' checked="checked" />
            </div>
            <div className="prifile-option__item">
              <div className="prifile-option__title">Новые, подходящие мне заявки</div>
              <input type="checkbox" className='checkbox-toggle' checked="checked" />
            </div>
            <div className="prifile-option__item">
              <div className="prifile-option__title">Отклики на мои заявки</div>
              <input type="checkbox" className='checkbox-toggle' checked="checked" />
            </div>
            <div className="prifile-option__item">
              <div className="prifile-option__title">Получение контактов</div>
              <input type="checkbox" className='checkbox-toggle' checked="checked" />
            </div>

            <div className="prifile-option__item">
              <div className="prifile-option__title">Акции и новости Umnoj</div>
              <input type="checkbox" className='checkbox-toggle' />
              {/* <label htmlFor=""></label> */}
            </div>
          </div>

        </div>
        <div className="wrap white-box">
          <div className="section-head">
            <h4 className='section-head__title section-heading'>Где вы получаете уведомления</h4>
          </div>
          <div className="prifile-options">
            <div className="prifile-option__item prifile-option__item-mod">
              <div className="prifile-option__title">По эл. почте — info@umnoj.com</div>
              <button className="profile-opion__choice btn-reset">Изменить</button>
              <input type="checkbox" className='checkbox-toggle' checked="checked" />
            </div>

            <div className="prifile-option__item prifile-option__item-mod">
              <div className="prifile-option__title">В Telegram</div>
              <button className="profile-opion__choice btn-reset">Добавить Telegram</button>
              <input type="checkbox" className='checkbox-toggle' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
