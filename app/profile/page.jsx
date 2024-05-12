import Header from '@/components/modules/Header/Header'
import React from 'react'
import axios from "axios";


export const getInfo = async () => {

  try {
    const response = await axios({
      method: "get",
      url: "https://d.sve.fvds.ru:445/api/v1/users/info",
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    })
    // console.log("профиль");

  } catch (error) {
    console.log(error);
  }
}



const Profile = () => {
  getInfo()

  return (
    <>
      <Header />
      <h1 className="profile">
        {/* {response.data.data} */}
      </h1>
    </>
  )
}


export default Profile;
