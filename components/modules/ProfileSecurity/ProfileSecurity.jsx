import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileSecurity() {
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
            <h4 className='section-head__title section-heading'>Данные для  авторизации</h4>
          </div>
          <div className="prifile-options">
            <div className="prifile-option__item prifile-option__item-mod">
              <div className="prifile-option__title-grey">Эл. почта</div>
              <div className="profile-option__value">info@miraden.com</div>
              <button className="profile-opion__choice-mod btn-reset">Изменить</button>
            </div>
            <div className="prifile-option__item prifile-option__item-mod">
              <div className="prifile-option__title-grey">Номер телефона</div>
              <div className="profile-option__value">+7  919  777-77-77</div>
              <button className="profile-opion__choice-mod btn-reset">Изменить</button>
            </div>
            <div className="prifile-option__item prifile-option__item-mod">
              <div className="prifile-option__title-grey">Пароль</div>
              <div className="profile-option__value">••••••••••••••</div>
              <button className="profile-opion__choice-mod btn-reset">Изменить</button>
            </div>
          </div>

        </div>
        <div className="wrap white-box">
          <div className="delete-profile">
            <div className="delete-profile__title">Удалить профиль</div>
            <div className="delete-profile__text">
              При  удалении профиля связанные с  ним  данные будут удалены. Аккаунт будет приостановлен на  30  дней, в  течение которых вы  сможете отменить удаление
            </div>
            <button className="delete-profile__btn btn-reset">Удалить акканут</button>
          </div>

        </div>
      </div>
    </>
  )
}
