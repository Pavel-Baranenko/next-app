"use client"

// import Balance from '@/components/modules/Balance/Balance';
import Canceled from '@/components/modules/Canceled/Canceled';
import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
import Offer from '@/components/modules/Offer/Offer';
import Offerings from '@/components/modules/Offerings/Offerings';
import Performers from '@/components/modules/Performers/Performers';
import Recommended from '@/components/modules/Recommended/Recommended';
// import React from 'react'
import axios from "axios";
import Link from 'next/link';
import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'

import { useState } from 'react';





const UserOffer = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <div className='page__wrapper'>
      <Header />
      <div className="offer-wrap">
        <div className="container">
          <div className="tabs white-box">
            <div className="tabs__title">Куплю квартиру в Москве</div>
            <div className="tabs__buttons">
              <button className={`tabs__btn btn-reset  ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}>Заявка</button>
              <button className={`tabs__btn btn-reset  ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}>Предложения <span className='blue'>5</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}>Исполнители <span>2</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(4, "active")}`}
                onClick={() => handleClick(4)}>Отказы <span>1</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(5, "active")}`}
                onClick={() => handleClick(5)}>Рекомендованные <span>193</span></button>


            </div>
          </div>
        </div>
        <div className="panels">
          {checkActive(1, "active") && <Offer />}
          {checkActive(2, "active") && <Offerings />}
          {checkActive(3, "active") && <Performers />}
          {checkActive(4, "active") && <Canceled />}
          {checkActive(5, "active") && <Recommended />}
        </div>


      </div>
      <Footer />
    </div>
  )
}


export default UserOffer;
