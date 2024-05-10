"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import ReactInputVerificationCode from 'react-input-verification-code';
// import 'react-input-verification-code/dist/index.css';
import 'react-phone-number-input/style.css'

export default function Auth() {
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [validphone, setValidphone] = useState();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);

  const [types, setTypes] = useState(false)

  const chengeValue = () => {
    setValue(event.target.value);
  }
  const changePhone = () => {
    setPhone(event.target.value)
    // if (phone[0] == "+" && phone[1] == "7") {
    //   phone[1] == "8"
    // }
  }
  const changeName = () => {
    setName(event.target.value.trim());
  }
  const changeMail = () => {
    setMail(event.target.value.trim());
  }
  const changePassword = () => {
    setPassword(event.target.value.trim());
  }
  const submitForm = () => {
    console.log("Отправлено")
  }
  const verify = value && name && phone && mail && password
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
      <div className={`container ${verify ? "isGoing" : "notValid"}`}>
        <form className="form" autoComplete="off">
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
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Имя <span className='red'>*</span></label>
                  <input type="text" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner tel-input ${phone ? "float-input-tel" : ""}`}>
                  <label htmlFor="">Номер телефона <span className='red'>*</span></label>
                  <PhoneInput
                    defaultCountry="RU"
                    value={phone}
                    onChange={changePhone} />
                </div>
                <div className={`input__inner ${mail ? "float-input" : ""} `}>
                  <label htmlFor="">Эл. почта <span className='red'>*</span></label>
                  <input
                    type="mail"
                    onChange={changeMail}
                    value={mail}
                    autoComplete="false"
                  />
                </div>
                <div className={`input__inner  ${password ? "float-input" : ""}`}>
                  <label htmlFor="">Придумайте пароль <span className='red'>*</span></label>
                  <input
                    type={types ? "text" : "password"}
                    onChange={changePassword}
                    value={password}
                    autoComplete="new-password"
                  />
                  <div className={`showpass ${types ? "text" : "password"}`} onClick={handleShow}></div>
                </div>
              </div>
            </div>

          </div>


          <p className="bottom__text">Нажимая на кнопку «Далее», вы соглашаетесь с обработкой <Link href="">персональных данных</Link> и <Link href="">политикой конфиденциальности</Link></p>
        </form>
        {/* {verify ? <form className="verify">
          <div className="form__heading">
            Пройдите простую регистрацию
          </div>
          <div className="form__line">
            На номер {phone} был отправлен СМС-код для подтверждения. Если код не поступил, тогда напишите в <Link href="/tg">поддержку</Link>
          </div>
          <div className="verify__body">
            <ReactInputVerificationCode placeholder="" />

          </div>


        </form> : ""} */}

        <button className=" reset-btn blue-btn submit-btn" onClick={`${(verify) ? submitForm : ""}`}>Далее</button>
      </div>

    </main>
  );
}
