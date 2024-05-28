import axios from "axios";
import React, { useEffect } from 'react';


export const registration = async (name, email, pass, phone, role) => {
  const number = phone.replace(/\D/g, '')

  const bodyFormData = new FormData();
  bodyFormData.append("first_name", name)
  bodyFormData.append("email", email)
  bodyFormData.append("pass", pass)
  bodyFormData.append("phone", number)
  bodyFormData.append("user_type", role)

  // return async dispatch => {
  try {
    const response = await axios({
      method: "post",
      url: "https://umnoj.com:445/users/create",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })

    localStorage.setItem("token", JSON.stringify(response.data.data.token))
    // localStorage.setItem("Jwt", JSON.stringify(response.data.token))
    // localStorage.setItem("Jwt", JSON.stringify(response.data.token))
    // localStorage.getItem('Jwt')
    // localStorage.removeItem('Jwt')
    sendCode()
    // console.log(JSON.parse(localStorage.getItem('token')));
  } catch (error) {
    console.log(error);
  }
  // }
}


export const sendCode = async () => {

  try {
    const response = await axios({
      method: "get",
      url: "https://umnoj.com:445/users/sms",
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    })

    // console.log(localStorage.getItem('token'));
  } catch (error) {
    console.log(error);
  }

}


export const sendCodeUser = async (code) => {
  // console.log(code);
  // const url = "https://umnoj.com:445/users/activate"
  // console.log(url);
  // console.log(JSON.parse(localStorage.getItem('token')));

  try {
    const response = await axios.get(`https://umnoj.com:445/users/activate?code=${code}`, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    localStorage.setItem("token", JSON.stringify(response.data.data.token))
    localStorage.setItem("id", JSON.stringify(response.data.data.id))
    localStorage.setItem("role", JSON.stringify(response.data.data.user_type))

    console.log("зарегистрирован");

  } catch (error) {
    console.log(error);
  }
  // }
}



export const loginUser = async (login, password) => {
  const bodyFormData = new FormData();
  bodyFormData.append("email", login)
  bodyFormData.append("pass", password)
  try {
    const response = await axios({
      method: "post",
      url: "https://umnoj.com:445/users/login",
      data: bodyFormData
    })
    console.log("вход");

  } catch (error) {
    console.log(error);
  }
}





export const getInfo = async () => {

  try {
    const response = await axios({
      method: "get",
      url: "https://umnoj.com:445/users/info",
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    })
    console.log("профиль");
    // window.location.replace("/profile")
  } catch (error) {
    console.log(error);
  }
}