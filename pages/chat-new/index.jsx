"use client"

import Balance from '@/components/modules/Balance/Balance';
import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
// import React from 'react'
import axios from "axios";
import Link from 'next/link';
import { useState } from 'react';

import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'

import styles from "./index.module.scss"


const Chat = () => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.top}>
            <div className={styles.top__inner}>
              <h6>Куплю квартиру в Москве</h6>
              <p>Заявка #12342323</p>
            </div>
            <button className={styles.public}>
              <span>Опубликована</span>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L5.64645 4.89645C5.84171 5.09171 6.15829 5.09171 6.35355 4.89645L10.5 0.75" stroke="#7786A5" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div className={styles.midle}>

            <div className={styles.item}>
              <div className={styles.heading}>Предложение от</div>
              <div className={styles.user}>
                <img src="./img/avatar.png" alt="" className={styles.avatar} />
                <div className={styles.user__info}>
                  <div className={styles.user__wrap}>
                    <div className={styles.name}>Светлана Гридасова К.</div>
                    <div className={styles.verify}><img src="./img/pass-up.svg" alt="" /></div>
                    <div className={styles.rating}>
                      <img src="./img/star.svg" alt="" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className={styles.role}>Агент</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>Город</div>
              <div className={styles.info__text}>Москва</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>Телефон</div>
              <div className={styles.info__text}>+7 919 777-77-77</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>WhatsApp</div>
              <div className={styles.info__text}>+7 919 777-77-77</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>Telegram</div>
              <div className={styles.info__text}>@anastasia_real_estate</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>Viber</div>
              <div className={styles.info__text}>+7 919 777-77-77</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>Zoom</div>
              <div className={styles.info__text}>@anastasia_real_estate</div>
            </div>
            <div className={styles.item}>
              <div className={styles.heading}>О себе</div>
              <div className={styles.info__text}>
                <p>
                  Отзывы моих клиентов говорят о моем функционале на всех этапах сотрудничества намного лучше чем я сама могу рассказать, когда клиент обращается ко мне либо к любому другому специалисту он хочет получить качественные услуги (это правило я усвоила много лет назад) именно поэтому каждый новый клиент который сотрудничает со мной получает намного больше чем просто услугу, я с удовольствием делюсь своими знаниями
                  Я сама могу рассказать, когда клиент обращается ко мне либо к любому другому специалисту он хочет получить качественные услуги (это правило я усвоил много лет назад) именно поэтому каждый новый клиент который сотрудничает со мной получает намного больше чем просто услугу, я с удовольствием делюсь своими
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chat}>
          <div className={styles.top__chat}>
            <button className={styles.cloose}>
              <img src="./img/cloose__chat.svg" alt="" />
            </button>
          </div>
          <div className={styles.middle__chat}>
            <div className={styles.message__group}>
              <div className={styles.date}>22 марта</div>
              <div className={styles.message}>
                <img src="./img/avatar-3.png" alt="" className={styles.message__avatar} />
                <div className={styles.message__list}>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>Добрый день. Меня зовут Светлана, я агент по недвижимости из компании Real Home. Предлагаю на выбор несколько вариантов</p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56</span>
                  </div>
                </div>

              </div>
              <div className={styles.my__message}>
                <img src="./img/avatar-4.png" alt="" className={styles.message__avatar} />
                <div className={styles.message__list}>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>Добрый день, спасибо, отличные варианты</p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56
                      <span className={styles.status}>
                        <img src="./img/readed.svg" alt="" />
                      </span>
                    </span>
                  </div>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>В течение двух дней постараюсь ответить и задать вопросы</p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56
                      <span className={styles.status}>
                        <img src="./img/readed.svg" alt="" />
                      </span>
                    </span>
                  </div>
                </div>

              </div>
              <div className={styles.message}>
                <img src="./img/avatar-3.png" alt="" className={styles.message__avatar} />
                <div className={styles.message__list}>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>
                      Хорошо, буду ожидать
                    </p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56</span>
                  </div>
                </div>

              </div>
            </div>
            <div className={styles.message__group}>
              <div className={styles.date}>23 марта</div>

              <div className={styles.my__message}>
                <img src="./img/avatar-4.png" alt="" className={styles.message__avatar} />
                <div className={styles.message__list}>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>
                      Добрый день, мне понравился 2 вариант. Могу ли я посмотреть этот объект онлайн или вы не проводите онлайн-показ?
                    </p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56
                      <span className={styles.status}>
                        <img src="./img/readed.svg" alt="" />
                      </span>
                    </span>
                  </div>

                </div>

              </div>
              <div className={styles.message}>
                <img src="./img/avatar-3.png" alt="" className={styles.message__avatar} />
                <div className={styles.message__list}>
                  <div className={styles.message__box}>
                    <p className={styles.message__text}>
                      Добрый день, Александра. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?
                    </p>
                    <span className={styles.sub__time}></span>
                    <span className={styles.time}>12:56</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.bottom__chat}>
            <button className={styles.add__file}>
              <img src="./img/add_file.svg" alt="" />
            </button>
            <div className={styles.input}>
              <input type="text" placeholder='Написать сообщение…' />
            </div>
            <button className={styles.send}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0879 8.91913C14.1659 8.38017 14.1659 6.8419 13.0879 6.30294L2.36126 0.9396C1.22924 0.37359 -0.0385325 1.41516 0.297061 2.63549L1.54228 7.16355C1.55017 7.19222 1.55728 7.22105 1.56362 7.25H4.00098C4.20808 7.25 4.37598 7.41789 4.37598 7.625C4.37598 7.83211 4.20808 8 4.00098 8H1.55724C1.55261 8.01955 1.54763 8.03904 1.54229 8.05846L0.297053 12.5866C-0.0385369 13.8069 1.22923 14.8485 2.36125 14.2825L13.0879 8.91913Z" fill="#B8C6E3" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Chat;
