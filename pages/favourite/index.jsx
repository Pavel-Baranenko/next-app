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
import Object from '@/components/modules/Object/Object';
import Leads from '@/components/modules/Leads/Leads';





const UserFavourite = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";


  return (
    <div className='page__wrapper'>
      <Header />
      <div className="offer-wrap">
        <div className="container">
          <div className="tabs white-box">
            <div className="tabs__title">
              Избранное
            </div>
            <div className="tabs__buttons">
              <button className={`tabs__btn btn-reset  ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}>Объекты</button>
              <button className={`tabs__btn btn-reset  ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}>Заявки </button>
              <button className={`tabs__btn btn-reset  ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}>Пользователи </button>



            </div>
          </div>
        </div>
        <div className="panels">
          {checkActive(1, "active") && <Object />}
          {checkActive(2, "active") && <Leads />}
          {checkActive(3, "active") && <Performers />}
        </div>


      </div>

      <Footer />
    </div>
  )
}


export default UserFavourite;
