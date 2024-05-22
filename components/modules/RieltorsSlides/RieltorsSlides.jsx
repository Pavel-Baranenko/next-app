"use client"

import React, { useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
// import "swiper/swiper.min.css";
import styles from "./index.module.scss"
import ReadMore from '@/components/elements/ReadMore/ReadMore';



export default function RieltorsSlides() {


  return (
    <>
      <section className={styles.wrapper}>
        <div className="container__fluid-left container__fluid">
          <h4 className={styles.section__title}>С нами зарабатывают сотни риелторов и агентств из разных городов России</h4>

          <Swiper
            navigation={true}
            modules={[Navigation, Mousewheel]}
            className="rieltor-swiper"
            spaceBetween={20}
            slidesPerView={'auto'}
            mousewheel={true}
          // speed={3000}
          // loop={true}
          // reverseDirection={true}
          >



            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/yes.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Куликов Игорь Антонович</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.9</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  Платформа Umnoj решила мою боль с целевыми заявками!
                </span>
                <div className="text-open__bottom">
                  <ReadMore>
                    У&nbsp;меня была проблема с&nbsp;поиском качественных клиентов. Раньше я&nbsp;пытался найти потенциальных покупателей недвижимости самостоятельно.<br /><br />Давал объявления на&nbsp;Циан, Авито и&nbsp;подобных ресурсах. Делал звонки по&nbsp;холодной базе клиентов.Такая работа забирала много времени и&nbsp;сил без какого‑либо значимого результата.
                    Сейчас основной поток клиентов получаю с&nbsp;Umnoj и&nbsp;по&nbsp;этой причине с&nbsp;благодарностью пишу данный отзыв.
                  </ReadMore>

                  {/* <div className={styles.open}>Открыть еще</div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/avatar-1.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Яковлева Ангелина</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.8</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  За первый месяц 4 сделки
                </span>
                <div className="text-open__bottom">
                  <p>
                    Привет всем, меня зовут Ангелина. Работаю в&nbsp;агентстве &laquo;Hopervin group&raquo;. Я&nbsp;узнала о&nbsp;портале и&nbsp;решил попробовать. И&nbsp;что я&nbsp;могу сказать&nbsp;&mdash; здесь действительно заморочились над качеством заявок! Мы&nbsp;покупали как эксклюзивные заявки так и&nbsp;доступ к&nbsp;общей ленте. Уже прошло 4&nbsp;сделки и&nbsp;ещё 11&nbsp;показов. Однозначно будем продолжать. Спасибо!
                  </p>


                  {/* <div className={styles.open}>Открыть еще</div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/avatar-2.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Захарова Дарья Данииловна</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.8</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  Umnoj реально помогает находить покупателей
                </span>
                <div className="text-open__bottom">
                  <ReadMore>
                    Рекомендую сервис всем риелторам, которым нужна помощь в&nbsp;поиске клиентов и&nbsp;развитии их&nbsp;бизнеса. Это действительно эффективный инструмент, который помогает находить целевые заявки и&nbsp;повышать эффективность взаимодействия с&nbsp;клиентами. Меня можете не&nbsp;слушать, просто попробуйте. В&nbsp;любом случае тестировать можно бесплатно.
                  </ReadMore>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/avatar-3.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Баринов Пётр</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.8</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  Это пока самые качественные заявки, с которыми работал
                </span>
                <div className="text-open__bottom">
                  <ReadMore>
                    С&nbsp;появлением этой платформы зарабатывать стало проще. Одним из&nbsp;главных преимуществ является, то, что я&nbsp;мог указать параметры недвижимости, которой я&nbsp;занимаюсь, и&nbsp;потом получать уведомления о&nbsp;новых заявках, соответствующих моим требованиям. Вот это настоящая экономия времени и&nbsp;энергии! К&nbsp;тому&nbsp;же, я&nbsp;могу взаимодействовать с&nbsp;потенциальными клиентами через встроенный чат, чтобы уточнить их&nbsp;потребности и&nbsp;предложить им&nbsp;варианты.
                  </ReadMore>

                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/avatar-4.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Алексеев Андрей</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.8</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  Получил доступ к полезной информации
                </span>
                <div className="text-open__bottom">
                  <ReadMore>
                    Благодаря этому сервису я&nbsp;получил доступ к&nbsp;полезной информации, с&nbsp;помощью которой я&nbsp;могу легко определить цены объектов, узнать спрос и&nbsp;предложение в&nbsp;конкретном районе, а&nbsp;также оценить потенциал для инвестиций. Все это помогает мне принимать более обоснованные решения и&nbsp;улучшить свою работу как риелтора.
                  </ReadMore>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.head}>

                  <img src="../img/avatar-5.png" alt="" className={styles.img} />

                  <div className={styles.wrap}>
                    <div className={styles.top}>
                      <div className={styles.name}>Васильева Анна Витальевна</div>
                      <div className={styles.verify}></div>
                    </div>
                    <div className={styles.role}>Риелтор</div>
                    <div className={styles.bottom}>
                      <div className={styles.rating}>4.8</div>
                    </div>
                  </div>
                </div>


                <div className={styles.stars}>
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                  <img src="./img/star.svg" alt="" />
                </div>
                <span className={styles.title}>
                  Спасибо, все супер )
                </span>
                <div className="text-open__bottom">
                  <p>
                    Использование этой платформы стало для меня настоящим прорывом. Я теперь получаю целевые заявки от клиентов и веду эффективное общение с ними. Это помогает мне быстрее развивать свой бизнес и достигать успеха в сфере недвижимости
                  </p>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </section >
    </>
  )
}
