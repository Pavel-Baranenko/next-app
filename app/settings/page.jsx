"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select'
// import 'react-input-verification-code/dist/index.css';
import 'react-phone-number-input/style.css'
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default function Settings() {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [patronymic, setPatronymic] = useState();

  const [images, setImages] = useState({
    // title: "",
    // descr: "",
    size: 0,
    photos: []
  });

  const { title, descr, photos } = images
  const handleImg = (e) => {
    setImages({
      ...images,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = e => {
    const files = e.target.files;
    const photosArr = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        const fileobj = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result
        };

        console.log(fileobj.size);
        photosArr.push(fileobj);
        setImages({
          ...images,
          // size:
          photos: [...photos, ...photosArr]
        })
      })
    }
  }

  const handleDeleteImg = (e) => { }

  const changePhone = () => {
    setPhone(event.target.value)
  }


  const changeName = () => {
    setName(event.target.value.trim());
  }
  const changeSurname = () => {
    setSurname(event.target.value.trim());
  }
  const changePatronymic = () => {
    setPatronymic(event.target.value.trim());
  }



  return (
    <main>
      <div className="container">
        <div className="form settings" >
          <div className="settings-top">
            <a href="javascript:history.back()" className="back-link"></a>
            <h4>Настройте ваш профиль риелтора</h4>
            <span className="user-id">ID 10445</span>
          </div>
          <div className="form__inner ">
            <div className="form__heading">
              Фото для профиля <span className='red'>*</span>
            </div>
            <div className="form__line">
              Загрузите минимум одно фото для профиля. Вес до 10 мб. Оптимальное разрешение 600 x 600px. Доступный формат jpg / png
            </div>
            <div className="form__body">
              <div className="file-input"></div>
              <div className="file-upload">
                <form className="" enctype="multipart /form-data">

                  <div className="custom-form-group">
                    {photos.length == 0 && <div className="custom-file-drop-area ">
                      <input type="file" name="photos" placeholder="Enter photos" multiple="true" id="filephotos" onChange={handleFileChange} />
                      <label for="filephotos">
                        <img src="../img/photos.svg" alt="" />
                        <p>
                          Перетащите изображение сюда или
                          <span className='blue'>загрузите с устройства</span>
                        </p>
                      </label>
                    </div>
                    }
                    <div className="custom-file-preview">
                      {photos.length > 0 && photos.map((item, index) => (
                        <div className="prev-img" key={index} data-imgindex={index}>
                          <span onClick={handleDeleteImg}>&times;</span>
                          <img src={item.src} alt={item.name} />
                        </div>
                      ))}
                      {photos.length > 0 && <div className="mini-drop-area custom-file-drop-area">
                        <input type="file" name="photos" placeholder="Enter photos" multiple="true" id="filephotos" onChange={handleFileChange} />
                        <label for="filephotos">
                          <img src="../img/photos.svg" alt="" />
                        </label>
                      </div>

                      }

                    </div>

                  </div>
                  {/* <button type="submit" className="btn-submit">Submit</button> */}
                </form>
              </div>


            </div>

          </div>
          <div className="form__inner ">
            <div className="form__heading">
              Личные данные  <span className='red'>*</span>
            </div>
            <div className="form__line">
              Ваши личные данные будут доступны всем пользователям платформы
            </div>
            <div className="form__body form__body-box">
              <div className="form-grid-optional">
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Имя <span className='red'>*</span></label>
                  <input type="text" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner ${surname ? "float-input" : ""}`}>
                  <label htmlFor="">Фамилия<span className='red'>*</span></label>
                  <input type="text" onChange={changeSurname} value={surname} />
                </div>
                <div className={`input__inner ${patronymic ? "float-input" : ""}`}>
                  <label htmlFor="">Отчество</label>
                  <input type="text" onChange={changePatronymic} value={patronymic} />
                </div>
                <Select options={[
                  { value: 'man', label: 'Мужской' },
                  { value: 'woman', label: 'Женский' }
                ]} placeholder="Пол" className='optionalRed' />
              </div>
              {/* isMulti */}
              <Select options={[

                { value: 'Moskow', label: 'Москва' },
                { value: 'Spb', label: 'Санкт-Петербург' }
              ]} placeholder="Город" className='optionalRed' />
            </div>

          </div>
          <div className="form__inner ">
            <div className="form__heading">
              Контакты <span className='red'>*</span>
            </div>
            <div className="form__line">
              Все данные, кроме эл. почтывидны пользователям, которые откроют вам свои контакты
            </div>
            <div className="form__body">
              <div className="form-grid-optional">
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Телефон <span className='red'>*</span></label>
                  <input type="number" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner ${surname ? "float-input" : ""}`}>
                  <label htmlFor="">Эл. почта<span className='red'>*</span></label>
                  <input type="mail" onChange={changeSurname} value={surname} />
                </div>

              </div>
              <div className="form-grid-optional-title">Мессенджеры</div>

              <div className="form-grid-optional">
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">WhatsApp</label>
                  <input type="text" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Telegram</label>
                  <input type="text" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Viber</label>
                  <input type="text" onChange={changeName} value={name} />
                </div>
                <div className={`input__inner ${name ? "float-input" : ""}`}>
                  <label htmlFor="">Zoom</label>
                  <input type="text" onChange={changeName} value={name} />
                </div>

              </div>
            </div>

          </div>
          <div className="form__inner ">
            <div className="form__heading">
              Параметры недвижимости <span className='red'>*</span>
            </div>
            <div className="form__line">
              Укажите параметры недвижимости, которой сейчас занимаетесь. Система будет информировать вас о поступлении заявок с аналогичными данными
            </div>
            <div className="form__body">
              {/* <ReactMultiSelectCheckboxes options={options} /> */}

              <Select isMulti options={[

                { value: 'Moskow', label: 'Москва' },
                { value: 'Spb', label: 'Санкт-Петербург' }
              ]} placeholder="Город " className='optionalRed' closeMenuOnSelect={false} />
              <Select isMulti options={[

                { value: 'Moskow', label: 'Москва' },
                { value: 'Spb', label: 'Санкт-Петербург' }
              ]} placeholder="Формат сделки " className='optionalRed' />
              <Select isMulti options={[

                { value: 'Moskow', label: 'Москва' },
                { value: 'Spb', label: 'Сsscssc' },
                { value: 'Spascdb', label: 'scd ff' },
                { value: 'sc', label: 'Санкт-Петербург' }
              ]} placeholder="Тип недвижимости " className='optionalRed' closeMenuOnSelect={false} />
              <Select isMulti options={[

                { value: 'Moskow', label: 'Москва' },
                { value: 'Spb', label: 'Санкт-Петербург' }
              ]} placeholder="Состояние недвижимости " className='optionalRed' closeMenuOnSelect={false} />
            </div>

          </div>
          <button className=" reset-btn blue-btn submit-btn">Далее</button>

          <p className="bottom__text">Нажимая на кнопку «Далее», вы соглашаетесь с обработкой <Link href="">персональных данных</Link> и <Link href="">политикой конфиденциальности</Link></p>
        </div>


      </div >

    </main >
  );
}
