import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'


const Balance = () => {

  return (

    <div className="container">

      <div className="white-wrap">
        <div className="balance__top">
          <div className="balance__top-left">
            <div className="balance__heading">Мой баланс</div>
            <span>13 761 ₽</span>
          </div>
          <div className="balance__top-rifht">
            <div className="balance__input-wrap">
              <input type="number" className='balance__input' placeholder='Сумма пополнения' />
            </div>
            <button className="balance__btn btn-reset">Пополнить баланс</button>
          </div>
        </div>
      </div>
      <div className="white-wrap">
        <div className="balance-heding">История операций</div>
        <div className="balance-info">
          <div className="balance-info__head">
            <div className="balance-info__value">Событие</div>
            <div className="balance-info__value">сумма, ₽</div>
          </div>
          <div className="balance-info__line">4 мая, понедельник</div>
          <div className="balance-info__add balance-info__item">
            <span>Баланс профиля</span>
            <p>+400 ₽</p>
          </div>
          <div className="balance-info__minus balance-info__item">
            <span>Покупка заявки</span>
            <p>− 1 500 ₽</p>
          </div>
          <div className="balance-info__line">2 мая, суббота</div>

          <div className="balance-info__minus balance-info__item">
            <span>Продление тарифа PRO</span>
            <p>− 200.35 ₽</p>
          </div>
          <div className="balance-info__add balance-info__item">
            <span>Баланс профиля</span>
            <p>+400 ₽</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Balance;