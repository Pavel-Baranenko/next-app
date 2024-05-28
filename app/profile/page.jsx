"use client"

import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
import ProfileInfo from '@/components/modules/ProfileInfo/ProfileInfo';
import ProfileNotice from '@/components/modules/ProfileNotice/ProfileNotice';
import ProfileSecurity from '@/components/modules/ProfileSecurity/ProfileSecurity';
// import React from 'react'
import axios from "axios";
import Link from 'next/link';
import { useState } from 'react';


export const getInfo = async () => {

  // try {
  //   const response = await axios({
  //     method: "get",
  //     url: "https://umnoj.com:445/s/info",
  //     headers: {
  //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  //     },
  //   })
  //   // console.log("профиль");

  // } catch (error) {
  //   console.log(error);
  // }
}



const Profile = () => {
  getInfo()

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <>
      <Header />
      <div className="profile__body">
        <div className="container">
          <div className="tabs white-box">
            <div className="tabs__title">Мой профиль</div>
            <div className="tabs__buttons">
              <button className={`tabs__btn btn-reset  ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}>Личные данные</button>
              <button className={`tabs__btn btn-reset  ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}>Уведомления</button>
              <button className={`tabs__btn btn-reset  ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}>Безопасность</button>
            </div>
          </div>
        </div>
        <div className="panels"></div>
        {checkActive(1, "active") && <ProfileInfo />}
        {checkActive(2, "active") && <ProfileNotice />}
        {checkActive(3, "active") && <ProfileSecurity />}

      </div>
      <Footer />
    </>
  )
}


export default Profile;
