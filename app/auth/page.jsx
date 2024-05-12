"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import ReactInputVerificationCode from 'react-input-verification-code';
// import 'react-input-verification-code/dist/index.css';
// import axios from 'axios';
// import { Provider } from 'react-redux';
import 'react-phone-number-input/style.css'
import { registration, sendCode, sendCodeUser } from '@/actions/user';
// import { useSelector, useDispatch } from "react-redux";


export default function Auth() {
  // const dispatch = useDispatch()

  const [role, setValue] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [validphone, setValidphone] = useState();
  const [email, setMail] = useState("");
  const [pass, setPassword] = useState("");
  const [form, setForm] = useState(false);

  const [types, setTypes] = useState(false)
  const [verifyaction, setVerifyaction] = useState(false)

  const [code, setCode] = useState("")

  const sendCodeForm = () => {
    sendCodeUser(code)
  }


  const chengeValue = () => {
    setValue(event.target.value);
    // console.log(role);
    console.log(code);
  }
  const changePhone = () => {
    setPhone(event.target.value.trim())

    console.log(phone.replace(/\D/g, ''));
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
  const verify = role && name && phone && email && pass && phone.length > 10
  const handleShow = () => {
    if (types === true) {
      setTypes(false)
    }
    else {
      setTypes(true)
    }
  }

  const sendForm = () => {
    if (verify) {
      registration(name, email, pass, phone, role)

      if (localStorage.getItem('token')) {
        // console.log("SDFGHJ");
        setVerifyaction(true)
        // sendCode()
      }
    }

  }
  // const sendUser = () => {
  //   const requestBody = {
  //     name: name,
  //     email: mail,
  //     pass: password,
  //     phone: phone,
  //     role: role
  //   };
  //   const headers = {
  //     'Authorization': 'Bearer my-token',
  //     'My-Custom-Header': 'foobar'
  //   };
  //   const response = axios.post('https://d.sve.fvds.ru:445/api/v1/users/create', requestBody);
  //   console.log(response);
  //   // const data = response.json();
  //   // this.setState({ postId: data.id });
  //   // console.log(data);

  // }

  // <Provider store={store}> {/* Wrap your app in the Provider */}
  //   <Router>
  //     <div>
  //       <Switch>
  //         <Route exact path="/">
  //           <Inicio />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // </Provider>

  return (
    // <Provider store={store}>
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
                    checked={role == 'client' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-client'>Я клиент</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-realtor" value="realtor"
                    checked={role == 'realtor' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-realtor'>Риелтор</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-agency" value="agency"
                    checked={role == 'agency' ? true : false}
                    onChange={chengeValue} />
                  <label htmlFor='radio-agency'>Агентство недвижимости</label>

                </div>

                <div className="input__box">
                  <input type="radio" name="radio-builder" value="builder"
                    checked={role == 'builder' ? true : false}
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
                    // value={phone}
                    onChange={changePhone} />
                </div>
                <div className={`input__inner ${email ? "float-input" : ""} `}>
                  <label htmlFor="">Эл. почта <span className='red'>*</span></label>
                  <input
                    type="mail"
                    onChange={changeMail}
                    value={email}
                    autoComplete="false"
                  />
                </div>
                <div className={`input__inner  ${pass ? "float-input" : ""}`}>
                  <label htmlFor="">Придумайте пароль <span className='red'>*</span></label>
                  <input
                    type={types ? "text" : "password"}
                    onChange={changePassword}
                    value={pass}
                    autoComplete="new-password"
                  />
                  <div className={`showpass ${types ? "text" : "password"}`} onClick={handleShow}></div>
                </div>
              </div>
            </div>

          </div>


          {!verifyaction && <p className="bottom__text">Нажимая на кнопку «Далее», вы соглашаетесь с обработкой <Link href="">персональных данных</Link> и <Link href="">политикой конфиденциальности</Link></p>}
        </form>
        {verifyaction ? <form className="verify">
          <div className="form__heading">
            Пройдите простую регистрацию
          </div>
          <div className="form__line">
            На номер {phone} был отправлен СМС-код для подтверждения. Если код не поступил, тогда напишите в <Link href="/tg">поддержку</Link>
          </div>
          <div className="verify__body">
            <ReactInputVerificationCode placeholder="" onChange={setCode} value={code} />

          </div>


        </form> : ""}

        {!verifyaction && <button className=" reset-btn blue-btn submit-btn" onClick={sendForm}>Далее</button>}
        {verifyaction && <button className={code.length == 4 ? " reset-btn blue-btn" : 'reset-btn blue-btn code-btn'} onClick={sendCodeForm}>Зарегистрироваться</button>}
      </div>

    </main >
    // </Provider>

  );
}
