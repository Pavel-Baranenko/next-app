"use client"


import { Footer } from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header'
import Link from 'next/link';
import '@/app/globalStyles/normalize.css'
import '@/app/globalStyles/globals.scss'





const NotFound = () => {

  return (
    <>
      <Header />
      <div className="notfound">

        <img src="./img/404.svg" alt="" />
        <h4>Уууупс... Что-то пошло не так</h4>
        <p>Эта страница удалена, но на платформе еще много всего интересного</p>
        <Link href="./" className='notfound-link'>Главная страница</Link>
        <Link href="./" className='notfound-link'>Заявки</Link>
        <Link href="./" className='notfound-link'>Создать заявку</Link>
      </div>
      <Footer />
    </>
  )
}


export default NotFound;
