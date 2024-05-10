"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Link from 'next/link';

export default function Login() {
  const [login, setLogin] = useState();
  // const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [types, setTypes] = useState(false)

  const auth = login && password

  const chengeValue = () => {
    setLogin(event.target.value.trim());
  }
  const changePhone = () => {
    setPhone(event.target.value)
  }
  const changePass = () => {
    setPassword(event.target.value.trim());
  }
  const handleShow = () => {
    if (types === true) {
      setTypes(false)
    }
    else {
      setTypes(true)
    }
  }
  return (
    <main>
      <div className={`container ${auth ? "isGoing" : "notValid"}`}>
        <form className="form">
          <div className="form__inner">
            <div className="form__heading">
              Войдите в свой профиль
            </div>
            <div className="form__line">
              Если у вас ещё нет профиля, тогда <Link href="/auth">пройдите регистрацию</Link>
            </div>
            <div className="form__body">


              <div className="form__container">
                <div className={`input__inner ${login ? "float-input" : ""}`}>
                  <label htmlFor="">Логин <span className='red'>*</span></label>
                  <input type="text" onChange={chengeValue} value={login} />
                </div>
                <div className={`input__inner ${password ? "float-input" : ""}`}>
                  <label htmlFor="">Пароль <span className='red'>*</span></label>
                  <input type={types ? "text" : "password"} onChange={changePass} value={password} autoComplete='new-password' />
                  <div className={`showpass ${types ? "text" : "password"}`} onClick={handleShow}></div>
                </div>
                <p className="reset__password"><Link href="/reset-password" >Забыли пароль?</Link></p>
              </div>
            </div>

          </div>
          <button className=" reset-btn blue-btn submit-btn">Войти</button>
        </form>
      </div>

    </main>
  );
}
