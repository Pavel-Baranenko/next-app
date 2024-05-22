"use client"

import Balance from '@/components/modules/Balance/Balance';
import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
// import React from 'react'
import axios from "axios";
import Link from 'next/link';
import { useState } from 'react';





const UserBalance = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <>
      <Header />
      <div className="balance-wrap">
        <div className="container">
          <div className="tabs white-box">
            <div className="tabs__title">Счёт и оплата</div>
            <div className="tabs__buttons">
              <button className={`tabs__btn btn-reset  ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}>Баланс</button>
              <button className={`tabs__btn btn-reset In__development ${checkActive(2, "active")}`}
              >Документы</button>

            </div>
          </div>
        </div>
        <div className="panels">
          {checkActive(1, "active") && <Balance />}
          {checkActive(2, "active") && <div></div>}
        </div>


      </div>
      <Footer />
    </>
  )
}


export default UserBalance;
