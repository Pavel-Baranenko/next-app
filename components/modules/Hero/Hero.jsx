"use client"
import Link from "next/link";
import 'swiper/css';
import styles from "./index.module.scss"
// import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';


export default function Hero() {


  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>Биржа заявок для риелторов</h1>
        <span className={styles.hero__subtitle}>
          Пройдите регистрацию и начните работу с целевыми заявки прямо сейчас!
        </span>
        <Link href='/auth' className={styles.hero__btn}><span>Начать бесплатно</span></Link>
        <div className={styles.hero__caroucel}>
          <Swiper
            className={styles.Swiper}
            spaceBetween={20}
            slidesPerView={'auto'}
            modules={[Autoplay]}
            autoplay={{ delay: 0, reverseDirection: true, }}
            speed={3000}
            loop={true}
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            className={styles.SwiperReverce}
            spaceBetween={20}
            slidesPerView={'auto'}
            modules={[Autoplay]}
            // autoplay={{ delay: 0, reverseDirection: true, }}
            autoplay={{ delay: 0 }}
            speed={3000}
            loop={true}
          // reverseDirection={true}
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Валерия Ч.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>09.05.2024</span>
                </div>
                <div className={styles.title}>Куплю общепит в Москве</div>
                <span className={styles.price}>2 500 000 – 3 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 100 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
