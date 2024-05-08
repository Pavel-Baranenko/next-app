"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
// import ReactInputVerificationCode from 'react-input-verification-code';
// import 'react-input-verification-code/dist/index.css';
import 'react-phone-number-input/style.css'

export default function Auth() {
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
              Пройдите простую регистрацию
            </div>
            <div className="form__line">
              Укажите ваши данные для регистрации или <Link href="/login">войдите в свой профиль</Link>
            </div>
            <div className="form__body">
              <div className="form__radio-buttons">
                <div className="input__box">
                  <input type="radio" name="radio-client" value="client"
                    checked={value == 'client' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-client'>Я клиент</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-realtor" value="realtor"
                    checked={value == 'realtor' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-realtor'>Риелтор</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-agency" value="agency"
                    checked={value == 'agency' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-agency'>Агентство недвижимости</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-builder" value="builder"
                    checked={value == 'builder' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-builder'>Застройщик</label>

                </div>

              </div>
              <div className="form__body-grid">
                <div className="input__inner">
                  <label htmlFor="">Имя <span className='red'>*</span></label>
                  <input type="text" onChange={handleName} />
                </div>
                <div className="input__inner tel-input">
                  <label htmlFor="">Номер телефона <span className='red'>*</span></label>
                  <PhoneInput
                    defaultCountry="RU"
                    value={phone}
                    onChange={changePhone} />
                </div>
                <div className="input__inner">
                  <label htmlFor="">Эл. почта <span className='red'>*</span></label>
                  <input type="mail" />
                </div>
                <div className="input__inner ">
                  <label htmlFor="">Придумайте пароль <span className='red'>*</span></label>
                  <input type="password" />
                </div>
              </div>
            </div>

          </div>
          <button className=" reset-btn blue-btn submit-btn">Далее</button>

          <p className="bottom__text">Нажимая на кнопку «Далее», вы соглашаетесь с обработкой <Link href="">персональных данных</Link> и <Link href="">политикой конфиденциальности</Link></p>
        </form>

        <div className="verify">
          {/* <ReactInputVerificationCode /> */}
        </div>
      </div>

    </main>
  );
}
