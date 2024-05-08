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
              Войдите в свой профиль
            </div>
            <div className="form__line">
              Если у вас ещё нет профиля, тогда <Link href="/auth">пройдите регистрацию</Link>
            </div>
            <div className="form__body">


              <div className="form__container">
                <div className="input__inner">
                  <label htmlFor="">Логин <span className='red'>*</span></label>
                  <input type="text" onChange={handleName} />
                </div>
                <div className="input__inner">
                  <label htmlFor="">Пароль <span className='red'>*</span></label>
                  <input type="password" onChange={handleName} />
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
