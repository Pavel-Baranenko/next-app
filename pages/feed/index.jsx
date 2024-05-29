"use client"


import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
import Leads from '@/components/modules/Leads/Leads';

// import React from 'react'
import axios from "axios";
import Link from 'next/link';
import { useState } from 'react';

import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'

import styles from "./index.module.scss"


const Feed = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <div className='page__wrapper'>
      <Header />
      <div className={styles.feed}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={`In__development ${styles.dropdown}`}>
              Покупатели
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.21967C1.26256 -0.0732233 1.73744 -0.0732233 2.03033 0.21967L6 4.18934L9.96967 0.21967C10.2626 -0.0732233 10.7374 -0.0732233 11.0303 0.21967C11.3232 0.512563 11.3232 0.987437 11.0303 1.28033L6.88388 5.42678C6.39573 5.91493 5.60427 5.91493 5.11612 5.42678L0.96967 1.28033C0.676777 0.987437 0.676777 0.512563 0.96967 0.21967Z" fill="#7786A5" />
              </svg>

            </div>
            <button className="btn-reset">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V5C12.5 5.27614 12.2761 5.5 12 5.5H2C1.72386 5.5 1.5 5.27614 1.5 5V2C1.5 1.72386 1.72386 1.5 2 1.5ZM0 2C0 0.89543 0.895431 0 2 0H12C13.1046 0 14 0.895431 14 2V5C14 6.10457 13.1046 7 12 7H2C0.89543 7 0 6.10457 0 5V2ZM0.75 10C0.335786 10 0 10.3358 0 10.75C0 11.1642 0.335786 11.5 0.75 11.5H13.25C13.6642 11.5 14 11.1642 14 10.75C14 10.3358 13.6642 10 13.25 10H0.75Z" fill="#7786A5" />
              </svg>
            </button>
            <button className="btn-reset">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.75C2 0.335787 1.66421 0 1.25 0C0.835787 0 0.5 0.335786 0.5 0.75V13.25C0.5 13.6642 0.835786 14 1.25 14C1.66421 14 2 13.6642 2 13.25L2 0.75ZM6.25 0C6.66421 0 7 0.335787 7 0.75L7 13.25C7 13.6642 6.66421 14 6.25 14C5.83579 14 5.5 13.6642 5.5 13.25L5.5 0.75C5.5 0.335786 5.83579 0 6.25 0ZM11.25 0C11.6642 0 12 0.335787 12 0.75L12 13.25C12 13.6642 11.6642 14 11.25 14C10.8358 14 10.5 13.6642 10.5 13.25L10.5 0.75C10.5 0.335786 10.8358 0 11.25 0Z" fill="#4E6AF3" />
              </svg>

            </button>
          </div>
          <div className={styles.center}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 2C4.3505 2 2 4.3505 2 7.25C2 10.1495 4.3505 12.5 7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.3505 10.1495 2 7.25 2ZM0.5 7.25C0.5 3.52208 3.52208 0.5 7.25 0.5C10.9779 0.5 14 3.52208 14 7.25C14 8.93142 13.3852 10.4693 12.3682 11.651L15.6553 14.9382C15.9482 15.2311 15.9482 15.7059 15.6553 15.9988C15.3624 16.2917 14.8876 16.2917 14.5947 15.9988L11.2693 12.6734C10.1465 13.5069 8.75581 14 7.25 14C3.52208 14 0.5 10.9779 0.5 7.25Z" fill="#7786A5" />
            </svg>
            <input type="text" placeholder='Поиск по заявкам' />
          </div>
          <div className={styles.right}>
            <span>12 056</span>
            <p>Всего в работе</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.body}>
            <div className={styles.column}>
              <div className={styles.head}>
                <div className={styles.head__title}>
                  Новые заявки
                </div>
                <p>14 заявок</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>
              <div className={styles.column__box}>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.head}>
                <div className={styles.head__title}>
                  Отправлено предложение
                </div>
                <p>3 заявки</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>
              <div className={styles.column__box}>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__top}>
                    <div className={styles.name}>Карина И.</div>
                    <div className={styles.role}>Агент «RealHome»</div>
                    <div className={styles.date}>02.04.2024</div>
                  </div>
                  <div className={styles.title}>Куплю квартиру в Москве</div>
                  <div className={styles.price}>10 000 000 ₽</div>
                  <div className={styles.grid}>
                    <div className={styles.grid__item}>Новая</div>
                    <div className={styles.grid__item}>1–3</div>
                    <div className={styles.grid__item}>250 м2</div>
                    <div className={styles.grid__item}>Для перепродажи</div>
                    <div className={styles.grid__item}>Срочно</div>
                  </div>
                </div>
              </div>



            </div>
            <div className={styles.column}>
              <div className={styles.head__red}>
                <div className={styles.head__title}>
                  Получен контакт
                </div>
                <p>2 заявки</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>
              <div className={styles.item}>
                <div className={styles.item__top}>
                  <div className={styles.name}>Карина И.</div>
                  <div className={styles.role}>Агент «RealHome»</div>
                  <div className={styles.date}>02.04.2024</div>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <div className={styles.price}>10 000 000 ₽</div>
                <div className={styles.grid}>
                  <div className={styles.grid__item}>Новая</div>
                  <div className={styles.grid__item}>1–3</div>
                  <div className={styles.grid__item}>250 м2</div>
                  <div className={styles.grid__item}>Для перепродажи</div>
                  <div className={styles.grid__item}>Срочно</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__top}>
                  <div className={styles.name}>Карина И.</div>
                  <div className={styles.role}>Агент «RealHome»</div>
                  <div className={styles.date}>02.04.2024</div>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <div className={styles.price}>10 000 000 ₽</div>
                <div className={styles.grid}>
                  <div className={styles.grid__item}>Новая</div>
                  <div className={styles.grid__item}>1–3</div>
                  <div className={styles.grid__item}>250 м2</div>
                  <div className={styles.grid__item}>Для перепродажи</div>
                  <div className={styles.grid__item}>Срочно</div>
                </div>
              </div>



            </div>
            <div className={styles.column}>
              <div className={styles.head__red}>
                <div className={styles.head__title}>
                  Выявлена потребность
                </div>
                <p>2 заявки</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>
              <div className={styles.item}>
                <div className={styles.item__top}>
                  <div className={styles.name}>Карина И.</div>
                  <div className={styles.role}>Агент «RealHome»</div>
                  <div className={styles.date}>02.04.2024</div>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <div className={styles.price}>10 000 000 ₽</div>
                <div className={styles.grid}>
                  <div className={styles.grid__item}>Новая</div>
                  <div className={styles.grid__item}>1–3</div>
                  <div className={styles.grid__item}>250 м2</div>
                  <div className={styles.grid__item}>Для перепродажи</div>
                  <div className={styles.grid__item}>Срочно</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__top}>
                  <div className={styles.name}>Карина И.</div>
                  <div className={styles.role}>Агент «RealHome»</div>
                  <div className={styles.date}>02.04.2024</div>
                </div>
                <div className={styles.title}>Куплю квартиру в Москве</div>
                <div className={styles.price}>10 000 000 ₽</div>
                <div className={styles.grid}>
                  <div className={styles.grid__item}>Новая</div>
                  <div className={styles.grid__item}>1–3</div>
                  <div className={styles.grid__item}>250 м2</div>
                  <div className={styles.grid__item}>Для перепродажи</div>
                  <div className={styles.grid__item}>Срочно</div>
                </div>
              </div>



            </div>
            <div className={styles.column}>
              <div className={styles.head__red}>
                <div className={styles.head__title}>
                  Повторное предложение
                </div>
                <p>Нет заявок</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>




            </div>
            <div className={styles.column}>
              <div className={styles.head__red}>
                <div className={styles.head__title}>
                  Объект согласован
                </div>
                <p>Нет заявок</p>
                <button className={styles.info}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6V6.12132C9.25 6.48502 9.10552 6.83382 8.84835 7.09099L7.46967 8.46967C7.17678 8.76256 7.17678 9.23744 7.46967 9.53033C7.76256 9.82322 8.23744 9.82322 8.53033 9.53033L9.90901 8.15165C10.4475 7.61317 10.75 6.88284 10.75 6.12132V6C10.75 4.48122 9.51878 3.25 8 3.25C6.48122 3.25 5.25 4.48122 5.25 6V6.5C5.25 6.91421 5.58579 7.25 6 7.25C6.41421 7.25 6.75 6.91421 6.75 6.5V6Z" fill="#B8C6E3" />
                  </svg>

                </button>
              </div>




            </div>
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}


export default Feed;
