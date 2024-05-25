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
        <Link href='/auth' className={`${styles.hero__btn} blue-hover`}><span>Начать бесплатно</span></Link>
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
                    <span className={styles.name}>Антон К.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>01.05.2024</span>
                </div>
                <div className={styles.title}>Куплю участок земли в Москве</div>
                <span className={styles.price}>До 8 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>30 сот.</div>
                  <div className={styles.bottom__item}>Жилая застройка</div>
                  <div className={styles.bottom__item}>1–3 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Елизавета П.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>02.05.2024</span>
                </div>
                <div className={styles.title}>Куплю склад в Москве</div>
                <span className={styles.price}>2 000 000 – 2 500 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>до 20 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                  <div className={styles.bottom__item}>1–3 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Андрей К.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>07.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Санкт-Петербурге</div>
                <span className={styles.price}>До 7 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>до 40 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Владислав П.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>07.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Санкт-Петербурге</div>
                <span className={styles.price}>10 000 000 – 12 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1</div>
                  <div className={styles.bottom__item}>35–40 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Анна Ш.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>07.05.2024</span>
                </div>
                <div className={styles.title}>Куплю коттедж в Москве</div>
                <span className={styles.price}>50 000 000 – 55 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>4–6</div>
                  <div className={styles.bottom__item}>от 150 м2</div>
                  <div className={styles.bottom__item}>Сохранить деньги</div>
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
                    <span className={styles.name}>Наталья М.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>10.05.2024</span>
                </div>
                <div className={styles.title}>Куплю таунхаус в Санкт-Петербурге</div>
                <span className={styles.price}>До 12 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>6+</div>
                  <div className={styles.bottom__item}>от 160 м2</div>
                  <div className={styles.bottom__item}>Для перепродажи</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Ангелина С.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>11.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>До 60 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1</div>
                  <div className={styles.bottom__item}>40–55 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Роман Н.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>11.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>40 000 000 – 50 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>2–4</div>
                  <div className={styles.bottom__item}>от 120 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Алексей К.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>11.05.2024</span>
                </div>
                <div className={styles.title}>Куплю виноградник в Санкт-Петербурге</div>
                <span className={styles.price}>до 7 500 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>от 100 сот.</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Ирина П.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>12.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>До 30 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1</div>
                  <div className={styles.bottom__item}>50–80 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Лилия К.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>15.05.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>До 70 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>3</div>
                  <div className={styles.bottom__item}>от 100 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                  <div className={styles.bottom__item}>Срочно</div>
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
                    <span className={styles.name}>Валентина С.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>12.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>30 000 000 – 40 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1–3</div>
                  <div className={styles.bottom__item}>до 80 м2</div>
                  <div className={styles.bottom__item}>Для перепродажи</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Карина И.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>12.04.2024</span>
                </div>
                <div className={styles.title}>Куплю апартаменты в Москве</div>
                <span className={styles.price}>До 60 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>2</div>
                  <div className={styles.bottom__item}>50–60 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Евгений Б.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>12.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>До 30 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>4</div>
                  <div className={styles.bottom__item}>от 90 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                  <div className={styles.bottom__item}>1–3 мес</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Александр Г.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>15.04.2024</span>
                </div>
                <div className={styles.title}>Куплю дом в Санкт-Петербурге</div>
                <span className={styles.price}>35 000 000 – 40 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>2</div>
                  <div className={styles.bottom__item}>до 200 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Светлана К.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>15.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>До 50 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>2</div>
                  <div className={styles.bottom__item}>50–80 м2</div>
                  <div className={styles.bottom__item}>Для перепродажи</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Анатолий М.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>18.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Санкт-Петербурге</div>
                <span className={styles.price}>До 70 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>2-3</div>
                  <div className={styles.bottom__item}>от 100 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Кристина А. </span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>20.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>35 000 000 – 55 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1-3</div>
                  <div className={styles.bottom__item}>от 100 м2</div>
                  <div className={styles.bottom__item}>Для перепродажи</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Анастасия К.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>20.04.2024</span>
                </div>
                <div className={styles.title}>Куплю участок земли в Санкт-Петербурге</div>
                <span className={styles.price}>До 1 500 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>10 сот.</div>
                  <div className={styles.bottom__item}>Жилая застройка</div>
                  <div className={styles.bottom__item}>Срочно</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Михаил К.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>24.04.2024</span>
                </div>
                <div className={styles.title}>Куплю отель в Москве</div>
                <span className={styles.price}>До 200 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>от 1000 м2</div>
                  <div className={styles.bottom__item}>Для своего дела</div>
                  <div className={styles.bottom__item}>3–6 мес</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Олег С.</span>
                    <span className={styles.role}>Риелтор</span>
                  </div>
                  <span className={styles.date}>24.04.2024</span>
                </div>
                <div className={styles.title}>Куплю дом в Санкт-Петербурге</div>
                <span className={styles.price}>35 000 000 – 40 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>2</div>
                  <div className={styles.bottom__item}>до 200 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Александр Г.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>29.04.2024</span>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <span className={styles.price}>45 000 000 – 50 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Новая</div>
                  <div className={styles.bottom__item}>1–2</div>
                  <div className={styles.bottom__item}>40–70 м2</div>
                  <div className={styles.bottom__item}>Для проживания</div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.slide__cart}>
                <div className={styles.top}>
                  <div className={styles.user}>
                    <span className={styles.name}>Даниил Г.</span>
                    <span className={styles.role}>Клиент</span>
                  </div>
                  <span className={styles.date}>29.04.2024</span>
                </div>
                <div className={styles.title}>Куплю пентхаус в Санкт-Петербурге</div>
                <span className={styles.price}>До 60 000 000 ₽</span>
                <div className={styles.bottom}>
                  <div className={styles.bottom__item}>Вторичная</div>
                  <div className={styles.bottom__item}>2–3</div>
                  <div className={styles.bottom__item}>от 120 м2</div>
                  <div className={styles.bottom__item}>Сдавать в аренду</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
