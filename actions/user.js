import axios from "axios";


export const registration = async (email, pass, phone, role) => {
  try {
    const response = await axios.post("https://d.sve.fvds.ru:445/api/v1/users/create", {
      "email": email,
      "pass": pass,
      "phone": phone,
      "role": role
    })
    alert(response.data)
  } catch (error) {
    console.log(error);
  }
}