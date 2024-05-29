"use client"
import React, { useState } from 'react';
import Select from 'react-select'
import 'react-phone-number-input/style.css'
import Multiselect from 'multiselect-react-dropdown';
import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'
import Licence from '@/components/elements/licences';
import axios from 'axios';

export default function Settings() {

  const [stage, setStage] = useState(1);
  const [sex, setSex] = useState();
  const [propCity, setPropCity] = useState();

  const options = [
    { value: 'man', label: 'Мужской' },
    { value: 'woman', label: 'Женский' }
  ]
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [WhatsApp, setWhatsApp] = useState();
  const [tg, setTg] = useState();
  const [viber, setViber] = useState();
  const [zoom, setZoom] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [patronymic, setPatronymic] = useState();

  const [selectedCity, setSelectedCity] = useState([])
  const [selectedType, setSelectedType] = useState([])
  const [SelectedParams, setSelectedParams] = useState([])
  const [selectedCoast, setSelectedCoast] = useState([])

  const [about, setAbout] = useState("")


  const [videos, setVideos] = useState([]);


  const deleteVideo = (index) => {
    setVideos(videos.splice(index - 1, index));
  }

  const changeVideoInfo = (index, e) => {
    setVideos(videos.map((item, i) => {
      if (i == index) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }

    }))
  }

  const videores = videos.map((obj, index) => {
    if (videos.length > 0)
      return (
        <div className="video-input-box " key={index}>
          <div className={(obj.title.length > 0) ?
            "video-input-box__item float" :
            "video-input-box__item"}>
            <label htmlFor="title">Название видео</label>
            <input type="text" name='title' value={obj.title} onChange={(e) => changeVideoInfo(index, e)} />
          </div>
          <div className={(obj.link.length > 0) ?
            "video-input-box__item float" :
            "video-input-box__item"}>
            <label htmlFor="link">Ссылка на видео</label>
            <input type="text" name='link' value={obj.link} onChange={(e) => changeVideoInfo(index, e)} />
          </div>
          <button className="delete__video btn-reset" onClick={() => { deleteVideo(index) }}>
            <img src="./img/delete-video.svg" alt="" />
          </button>
        </div>
      )
  })



  const [images, setImages] = useState({
    size: 0,
    photos: []
  });

  const { title, descr, photos } = images

  // const handleImg = (e) => {
  //   setImages({
  //     ...images,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const [hightlight, setHightlight] = useState(false)

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

  const handleDeleteImg = (e) => {
    let target = e.target.parentElement;
    let targetindex = target.dataset.imgindex;
    setImages({
      ...images,
      // size:
      photos: [...photos.slice(0, targetindex), ...photos.slice(targetindex + 1)]
    })
  }
  const handlehightlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHightlight(true);
  }
  const handleunhightlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHightlight(false)
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt.files;

    console.log(files);
  }

  const saveProfile = (name, surname, patronymic, phone, email, WhatsApp, tg, viber, zoom) => {
    const formData = new FormData();
    // formData.append("avatar", photos[0])
    formData.append("first_name", name)
    formData.append("last_name", surname)
    formData.append("middlet_name", patronymic)
    formData.append("phone", phone)
    formData.append("email", email)
    formData.append("watsapp", WhatsApp)
    formData.append("telegram", tg)
    formData.append("viber", viber)
    formData.append("zoom", zoom)
    try {
      const response = axios({
        method: "post",
        url: 'https://umnoj.com:445/users/update',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        }
      })
      localStorage.setItem("token", JSON.stringify(response.data.data.token))
      getInfo()
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const firstStage = stage == 1 && photos.length > 0

  const secondStage = stage == 2 && (name && surname && sex && propCity)
  const thirdStage = stage == 3 && (phone && email)
  const fourthStage = stage == 4 && (selectedCity.length > 0 && selectedType.length > 0 &&
    SelectedParams.length > 0 && (selectedCoast.length > 0 || SelectedParams[0] == "Участок земли"))

  const changeStage = () => {
    if (firstStage) {
      setStage(2)
    }
    if (secondStage) {
      console.log(sex);
      setStage(3)
    }
    if (thirdStage) {
      setStage(4)
    }
    if (fourthStage) {
      setStage(5)
    }
  }

  return (
    <main>
      <div className="container">
        <div className="form settings" >
          <div className="settings-top">
            <a href="javascript:history.back()" className="back-link mob-none"></a>
            <h4> <a href="javascript:history.back()" className="back-link mob"></a>Настройте ваш профиль риелтора</h4>
            <span className="user-id">ID 91</span>
          </div>
          <div className="form__inner ">
            <div className="form__heading">
              Фото для профиля <span className='red'>*</span>
            </div>
            <div className="form__line">
              Загрузите минимум одно фото для профиля. Вес до 10 мб. Оптимальное разрешение 600 x 600px. Доступный формат jpg / png
            </div>
            <div className="form__body">
              <div className="file-upload">
                <form className="" encType="multipart /form-data">

                  <div className={hightlight ? "custom-form-group file-blue" : "custom-form-group"}>
                    {photos.length == 0 && <div className="custom-file-drop-area ">
                      <input type="file" name="photos" placeholder="Enter photos" multiple={true} id="filephotos"
                        onChange={handleFileChange}
                        onDragEnter={handlehightlight}
                        onDragOver={handlehightlight}
                        onDragLeave={handleunhightlight}
                        onDrop={handleDrop}
                      />
                      <label htmlFor="filephotos" className='file-input-click mob'>
                        Загрузите изображение
                      </label>
                      <label htmlFor="filephotos" className='mob-none'>
                        <img src="./img/photos.svg" alt="" />
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
                          <span onClick={handleDeleteImg}></span>
                          <img src={item.src} alt={item.name} />
                        </div>
                      ))}
                      {photos.length > 0 && <div className="mini-drop-area custom-file-drop-area">
                        <input type="file" name="photos" placeholder="Enter photos" multiple="true" id="filephotos" onChange={handleFileChange} />
                        <label htmlFor="filephotos">
                          <img src="./img/photos.svg" alt="" />
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
          {(stage > 1) &&
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
                    <input type="text" onChange={e => { setName(e.target.value.trim()) }} value={name} />
                  </div>
                  <div className={`input__inner ${surname ? "float-input" : ""}`}>
                    <label htmlFor="">Фамилия<span className='red'>*</span></label>
                    <input type="text"
                      onChange={e => { setSurname(e.target.value.trim()) }}
                      value={surname} />
                  </div>
                  <div className={`input__inner ${patronymic ? "float-input" : ""}`}>
                    <label htmlFor="">Отчество</label>
                    <input type="text" onChange={e => { setPatronymic(e.target.value.trim()) }} value={patronymic} />
                  </div>
                  <Select options={options} placeholder="Пол" className='optionalRed'
                    // onChange={(e) => { setSex(e.target.value), console.log("value"); }}
                    onChange={setSex}
                  />
                </div>
                {/* isMulti */}
                <Select options={[
                  { value: 'Moskow', label: 'Москва' },
                  { value: 'Spb', label: 'Санкт-Петербург' }
                ]} placeholder="Город" className='optionalRed' onChange={setPropCity} />
              </div>

            </div>
          }
          {(stage > 2) &&
            <div className="form__inner ">
              <div className="form__heading">
                Контакты <span className='red'>*</span>
              </div>
              <div className="form__line">
                Все данные, кроме эл. почты видны пользователям, которые откроют вам свои контакты
              </div>
              <div className="form__body">
                <div className="form-grid-optional">
                  <div className={`input__inner ${phone ? "float-input" : ""}`}>
                    <label htmlFor="">Телефон <span className='red'>*</span></label>
                    <input type="number" onChange={e => { setPhone(e.target.value) }} value={phone} />
                  </div>
                  <div className={`input__inner ${email ? "float-input" : ""}`}>
                    <label htmlFor="">Эл. почта<span className='red'>*</span></label>
                    <input type="email" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                  </div>

                </div>
                <div className="form-grid-optional-title">Мессенджеры</div>

                <div className="form-grid-optional">
                  <div className={`input__inner ${WhatsApp ? "float-input" : ""}`}>
                    <label htmlFor="">WhatsApp</label>
                    <input type="text" onChange={(e) => { setWhatsApp(e.target.value) }} value={WhatsApp} />
                  </div>
                  <div className={`input__inner ${tg ? "float-input" : ""}`}>
                    <label htmlFor="">Telegram</label>
                    <input type="text" onChange={(e) => { setTg(e.target.value) }} value={tg} />
                  </div>
                  <div className={`input__inner ${viber ? "float-input" : ""}`}>
                    <label htmlFor="">Viber</label>
                    <input type="text" onChange={(e) => { setViber(e.target.value) }} value={viber} />
                  </div>
                  <div className={`input__inner ${zoom ? "float-input" : ""}`}>
                    <label htmlFor="">Zoom</label>
                    <input type="text" onChange={(e) => { setZoom(e.target.value) }} value={zoom} />
                  </div>

                </div>
              </div>

            </div>
          }


          {(stage > 3) &&
            <>
              <div className="form__inner ">
                <div className="form__heading">
                  Параметры недвижимости <span className='red'>*</span>
                </div>
                <div className="form__line">
                  Укажите параметры недвижимости, которой сейчас занимаетесь. Система будет информировать вас о поступлении заявок с аналогичными данными
                </div>
                <div className="form__body">
                  <div className={`milti-select-inner ${selectedCity.length == 0 ? "" : "milti-select-inner-float"}`}>
                    <p className="multi-select-heading">Город <span className='red'>*</span></p>
                    <Multiselect
                      placeholder=''
                      isObject={false}
                      selectedValues={selectedCity}
                      options={["Москва", "Санкт-Петербург"]}
                      showCheckbox={true}
                      onSelect={(event) => { setSelectedCity(event) }}
                      onRemove={(event) => { setSelectedCity(event) }}
                    />
                  </div>

                  <div className={`milti-select-inner ${selectedType.length == 0 ? "" : "milti-select-inner-float"}`}>
                    <p className="multi-select-heading">Формат сделки <span className='red'>*</span></p>
                    <Multiselect
                      placeholder=''
                      isObject={false}
                      selectedValues={selectedType}
                      options={["Продажа", "Аренда"]}
                      showCheckbox={true}
                      onSelect={(event) => { setSelectedType(event) }}
                      onRemove={(event) => { setSelectedType(event) }}
                    />
                  </div>


                  <div className={`milti-select-inner  ${SelectedParams.length == 0 ? "" : "milti-select-inner-float"}`}>
                    <p className="multi-select-heading">Тип недвижимости <span className='red'>*</span></p>
                    <Multiselect
                      placeholder=''
                      isObject={false}
                      selectedValues={SelectedParams}
                      options={["Квартира", "Апартаменты", "Пентхаус", "Лофт", "Коттедж", "Частный дом", "Вилла", "Дуплекс", "Таунхаус", "Усадьба", "Особняк", "Поместье", "Мезонет", "Замок", "Участок земли", "Остров", "Виноградник", "Отель", "Офис", "Торговля", "Склад", "Общепит", "Производство", "Свободное назначение", "Другое"]}
                      showCheckbox={true}
                      onSelect={(event) => { setSelectedParams(event) }}
                      onRemove={(event) => { setSelectedParams(event) }}
                    />
                  </div>
                  {!(SelectedParams.length == 1 && SelectedParams[0] == "Участок земли") &&
                    <div className={`milti-select-inner  ${selectedCoast.length == 0 ? "" : "milti-select-inner-float"}`}>
                      <p className="multi-select-heading">Состояние недвижимости <span className='red'>*</span></p>
                      <Multiselect
                        placeholder=''
                        isObject={false}
                        selectedValues={selectedCoast}

                        options={["Новая", "Вторичная"]}
                        showCheckbox={true}
                        onSelect={(event) => { setSelectedCoast(event) }}
                        onRemove={(event) => { setSelectedCoast(event) }}
                      />
                    </div>
                  }


                </div>

              </div>

              <div className="form__inner ">
                <div className="form__heading">
                  Лицензии и сертификаты
                </div>
                <div className="form__body">
                  <Licence />
                </div>

              </div>
              <div className="form__inner ">
                <div className="form__heading">
                  О себе
                </div>
                <div className="form__line">
                  Напишите о себе и преимуществах работы с вами
                </div>
                <div className="form__body">
                  <div className="textarea-box">
                    <div className="text-counter">
                      {about.length}/500
                    </div>
                    <textarea onChange={e => { setAbout(e.target.value) }} value={about} placeholder='О себе' maxlength='500' />

                  </div>
                  <div className="add-video">


                    {videos.length > 0 &&
                      <div className="video__box">

                        {videores}

                      </div>}
                    <button className="add-video-block reset-btn" onClick={() => { setVideos([...videos, { title: "", link: "" }]) }} >
                      <span>Добавить видео</span>
                      <img src="./img/plus-video.svg" alt="" />
                    </button>
                  </div>
                </div>

              </div>
            </>
          }

          {(stage > 4) &&
            <button className=" reset-btn blue-btn submit-btn" onClick={() => { saveProfile(name, surname, patronymic, phone, email, WhatsApp, tg, viber, zoom) }}>Создать профиль</button>
          }

          {(stage < 5) &&
            <button className={(firstStage || secondStage || thirdStage || fourthStage) ? "reset-btn blue-btn submit-btn" : "reset-btn blue-btn submit-btn grey"} onClick={changeStage}>Далее</button>
          }

        </div>


      </div >

    </main >
  );
}
