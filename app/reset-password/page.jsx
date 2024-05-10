"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Link from 'next/link';

export default function Login() {
  const [mail, setName] = useState();
  const [pass, setPass] = useState();
  const [newpass, setNewPass] = useState();
  const auth = mail && pass && newpass

  const handleName = () => {
    setName(event.target.value.trim())
  }
  const changePass = () => {
    setPass(event.target.value.trim())
  }
  const changeNewPass = () => {
    setNewPass(event.target.value.trim())
  }

  return (
    <main>
      <div className={`container ${auth ? "isGoing" : "notValid"}`}>
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
                <div className={`input__inner ${mail ? "float-input" : ""}`}>
                  <label htmlFor="">Эл. почта <span className='red'>*</span></label>
                  <input
                    type="mail"
                    onChange={handleName}
                    value={mail} />
                </div>
                <div className={`input__inner ${pass ? "float-input" : ""}`}>
                  <label htmlFor="">Новый пароль <span className='red'>*</span></label>
                  <input
                    type="password"
                    onChange={changePass}
                    value={pass}
                  />
                </div>
                <div className={`input__inner ${newpass ? "float-input" : ""}`}>
                  <label htmlFor="">Повторите пароль <span className='red'>*</span></label>
                  <input
                    type="password"
                    onChange={changeNewPass}
                    autoComplete='new-password'
                    value={newpass} />
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
