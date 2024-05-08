"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Link from 'next/link';

export default function Login() {
  const [value, setValue] = useState();
  const [phone, setPhone] = useState();

  const chengeValue = () => {
    setValue(event.target.value);
  }
  const changePhone = () => {
    setPhone(event.target.value)
  }
  const handleName = () => {
    // console.log(.target.value);
  }

  return (
    <main>
      <div className="container">
        <form className="form">
          <div className="form__inner">
            <div className="form__heading">
              Восстановление пароля
            </div>
            <div className="form__line">
              Пожалуйста, заполните форму ниже для восстановления пароля
            </div>
            <div className="form__body">


              <div className="form__container">
                <div className="input__inner">
                  <label htmlFor="">Эл. почта <span className='red'>*</span></label>
                  <input type="mail" onChange={handleName} />
                </div>
                <div className="input__inner">
                  <label htmlFor="">Новый пароль <span className='red'>*</span></label>
                  <input type="password" onChange={handleName} />
                </div>
                <div className="input__inner">
                  <label htmlFor="">Повторите пароль <span className='red'>*</span></label>
                  <input type="password" onChange={handleName} />
                </div>
              </div>
            </div>

          </div>
          <button className=" reset-btn blue-btn submit-btn">Далее</button>
        </form>
      </div>

    </main>
  );
}
