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



const UserLeads = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <div className='page__wrapper'>
      <Header />
      <div className="offer-wrap">
        <div className="container">
          <div className="tabs white-box">
            <div className="tabs__title">Мои заявки</div>
            <div className="tabs__buttons">
              <button className={`tabs__btn btn-reset  ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}>Все <span>3</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}>Опубликованные <span>3</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}>Неопубликованные <span>1</span></button>
              <button className={`tabs__btn btn-reset  ${checkActive(4, "active")}`}
                onClick={() => handleClick(4)}>В архиве </button>


            </div>
          </div>
        </div>
        <div className="panels">
          {checkActive(1, "active") && <Leads />}
          {checkActive(2, "active") && <Leads />}
          {checkActive(3, "active") && <Leads />}
          {checkActive(4, "active") && <Leads />}
        </div>


      </div>
      <Footer />
    </div>
  )
}


export default UserLeads;
