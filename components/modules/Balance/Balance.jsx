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
        <table className="balance__table">
          <thead className="balance__table-top">
            <tr>
              <td>Тип операции</td>
              <td>Событие</td>
              <td>сумма, ₽</td>
              <td>Баланс, ₽</td>
              <td>Дата</td>
            </tr>
          </thead>
          <tbody>
            <tr className='replenishment'>
              <td>Пополнение</td>
              <td>Баланс профиля</td>
              <td>+400.00</td>
              <td>1,000.00</td>
              <td>27.12.22</td>
            </tr>
            <tr className='profit'>
              <td>Доход</td>
              <td>Реферальная программа</td>
              <td>+400.00</td>
              <td>1,000.00</td>
              <td>27.12.22</td>
            </tr>
            <tr className='debit'>
              <td>Списание</td>
              <td>Продление тарифа PRO</td>
              <td>— 200.35</td>
              <td>1,000.00</td>
              <td>27.12.22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Balance;