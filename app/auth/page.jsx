"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import ReactInputVerificationCode from 'react-input-verification-code';
// import 'react-input-verification-code/dist/index.css';
import axios from 'axios';
// import { Provider } from 'react-redux';
import 'react-phone-number-input/style.css'
import { registration } from '@/actions/user';
// import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
// import inMemoryJWT from '@/actions/inMemoryJWT';

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
  const router = useRouter()
  const sendCodeForm = () => {
    sendCodeUser(code)
    // console.log(sendCodeUser(code));
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
        resendOTP()
      }
    }

  }
  const sendCodeUser = async (code) => {
    // console.log(code);
    // const url = "https://umnoj.com:445/users/activate"
    // console.log(url);
    // console.log(JSON.parse(localStorage.getItem('token')));

    try {
      const response = await axios.get(`https://umnoj.com:445/users/activate?code=${code}`, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      });
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data.data.token))
      localStorage.setItem("id", JSON.stringify(response.data.data.id))
      localStorage.setItem("role", JSON.stringify(response.data.data.user_type))
      router.push('/settings')
      console.log("зарегистрирован");

    } catch (error) {
      console.log(error);
    }
    // }
  }


  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [popup, openPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (minutes === 0 && seconds === 0) {
        resetSendCode()
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(3);
    setSeconds(0);
  };

  const resetSendCode = () => {
    // alert("asass")
    console.log("code");
  }

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


          {!verifyaction && <p className="bottom__text">Нажимая на кнопку «Далее», вы соглашаетесь с обработкой <span onClick={() => openPopup(true)}>персональных данных</span> и <span onClick={() => openPopup(true)}>политикой конфиденциальности</span></p>}
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
            <div className="verify__timer">Отправить код ещё раз через (<span>{minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds} {minutes === 0 && seconds == 0 ? "<span>отправить</span>" : ""}</span>)</div>
          </div>


        </form> : ""}

        {!verifyaction && <button className=" reset-btn blue-btn submit-btn" onClick={sendForm}>Далее</button>}
        {verifyaction && <button className={code.length == 4 ? " reset-btn blue-btn" : 'reset-btn blue-btn code-btn'} onClick={sendCodeForm}>Зарегистрироваться</button>}
      </div>
      <div className={popup ? "popup open" : "popup cloose"}>
        <div className="popup__wrapper">
          <div className="policy">
            <div className="policy__top">
              <span className="policy__title" >
                Политика конфиденциальности
              </span>
              <button className="popup__cloose" onClick={() => openPopup(false)}>
                <img src="./img/cloose__popup.svg" alt="" />
              </button>
            </div>
            <div className="policy__body">
              <div className="policy__box">
                <span>1. Общие положения</span>
                <p>
                  Настоящая политика обработки персональных данных составлена в&nbsp;соответствии с&nbsp;требованиями Федерального закона от&nbsp;27.07.2006. &#8470;&nbsp;152-ФЗ &laquo;О&nbsp;персональных данных&raquo; (далее&nbsp;&mdash; Закон о&nbsp;персональных данных) и&nbsp;определяет порядок обработки персональных данных и&nbsp;меры по&nbsp;обеспечению безопасности персональных данных. Предпринимает их&nbsp;ООО &laquo;Умножить&raquo; (далее&nbsp;&mdash; Оператор).

                </p>
                <p className="text-cont">
                  1.1. Оператор ставит своей важнейшей целью и&nbsp;условием осуществления своей деятельности соблюдение прав и&nbsp;свобод человека и&nbsp;гражданина при обработке его персональных данных, в&nbsp;том числе защиты прав на&nbsp;неприкосновенность частной жизни, личную и&nbsp;семейную тайну.
                  1.2. Настоящая политика Оператора в&nbsp;отношении обработки персональных данных (далее&nbsp;&mdash; Политика) применяется ко&nbsp;всей информации, которую Оператор может получить о&nbsp;посетителях веб-сайта https://umnoj.com.
                </p>

              </div>
              <div className="policy__box">
                <span>2. Основные понятия, используемые в Политике</span>
                <p className="text-cont">
                  2.1. Автоматизированная обработка персональных данных&nbsp;&mdash; обработка персональных данных с&nbsp;помощью средств вычислительной техники.
                  2.2. Блокирование персональных данных&nbsp;&mdash; временное прекращение обработки персональных данных (за&nbsp;исключением случаев, если обработка необходима для уточнения персональных данных).
                  2.3. Веб-сайт&nbsp;&mdash; совокупность графических и&nbsp;информационных материалов, а&nbsp;также программ для ЭВМ и&nbsp;баз данных, обеспечивающих их&nbsp;доступность в&nbsp;сети интернет по&nbsp;сетевому адресу https://umnoj.com.
                  2.4. Информационная система персональных данных&nbsp;&mdash; совокупность содержащихся в&nbsp;базах данных персональных данных и&nbsp;обеспечивающих их&nbsp;обработку информационных технологий и&nbsp;технических средств.
                  2.5. Обезличивание персональных данных&nbsp;&mdash; действия, в&nbsp;результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.
                  2.6. Обработка персональных данных&nbsp;&mdash; любое действие (операция) или совокупность действий (операций), совершаемых с&nbsp;использованием средств автоматизации или без использования таких средств с&nbsp;персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
                  2.7. Оператор&nbsp;&mdash; государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с&nbsp;другими лицами организующие и/или осуществляющие обработку персональных данных, а&nbsp;также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с&nbsp;персональными данными.
                  2.8. Персональные данные&nbsp;&mdash; любая информация, относящаяся прямо или косвенно к&nbsp;определенному или определяемому Пользователю веб-сайта https://umnoj.com.
                  2.9. Персональные данные, разрешенные субъектом персональных данных для распространения,&nbsp;&mdash; персональные данные, доступ неограниченного круга лиц к&nbsp;которым предоставлен субъектом персональных данных путем дачи согласия на&nbsp;обработку персональных данных, разрешенных субъектом персональных данных для распространения в&nbsp;порядке, предусмотренном Законом о&nbsp;персональных данных (далее&nbsp;&mdash; персональные данные, разрешенные для распространения).
                  2.10. Пользователь&nbsp;&mdash; любой посетитель веб-сайта https://umnoj.com.
                  2.11. Предоставление персональных данных&nbsp;&mdash; действия, направленные на&nbsp;раскрытие персональных данных определенному лицу или определенному кругу лиц.
                  2.12. Распространение персональных данных&nbsp;&mdash; любые действия, направленные на&nbsp;раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на&nbsp;ознакомление с&nbsp;персональными данными неограниченного круга лиц, в&nbsp;том числе обнародование персональных данных в&nbsp;средствах массовой информации, размещение в&nbsp;информационно-телекоммуникационных сетях или предоставление доступа к&nbsp;персональным данным каким-либо иным способом.
                  2.13. Трансграничная передача персональных данных&nbsp;&mdash; передача персональных данных на&nbsp;территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.
                  2.14. Уничтожение персональных данных&nbsp;&mdash; любые действия, в&nbsp;результате которых персональные данные уничтожаются безвозвратно с&nbsp;невозможностью дальнейшего восстановления содержания персональных данных в&nbsp;информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.
                </p>
              </div>

              <div className="policy__box">
                <span>3. Основные права и обязанности Оператора</span>

                <p className="text-cont">
                  3.1. Оператор имеет право:
                  — получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;
                  — в случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также, направления обращения с требованием о прекращении обработки персональных данных, Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;
                  — самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.
                  3.2. Оператор обязан:
                  — предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;
                  — организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;
                  — отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;
                  — сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса;
                  — публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;
                  — принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;
                  — прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;
                  — исполнять иные обязанности, предусмотренные Законом о персональных данных.
                </p>
              </div>



            </div>
          </div>
        </div>
      </div>
    </main >
    // </Provider>

  );
}
