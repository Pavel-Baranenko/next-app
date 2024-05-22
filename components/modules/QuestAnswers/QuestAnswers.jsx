"use client"

import React, { useRef, useState } from 'react';
import styles from "./index.module.scss"
import Accordion from '@/components/elements/Accordion/Accordion';



export default function QuestAnswers() {


  return (
    <>
      <section className={styles.questanswer}>
        <div className="container__fluid">
          <h4 className="section__title">Вопросы и ответы</h4>
          <div className={styles.box}>
            <div className={styles.acc}>
              {/* <Accordion
                title="Item 1 - Lorem ipsum dolor sit amet"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              /> */}
              <Accordion
                title="Какие гарантии, что заявки целевые?"
                text="В первую очередь важно отметить, что на платформе можно оставить заявку только после подтверждения своего номера телефона. По этой причине в 90% случаев до публикации доходят только реальные люди,  подтвердившие серьезность своих намерений.
                Кроме того, вы всегда можете выбрать работу только с теми заявками, которые прошли дополнительную квалификацию нашего колл-центра."
              />
              <Accordion
                title="Как откликнуться на заявку?"
                text={`Любая отправленная информация в чат заказчика является откликом. Откликнуться на заявку может любой желающий. Для этого достаточно: \n
                1. Пройти регистрацию и ответить на простые вопросы о недвижимости, которую вы предлагаете.\n
                2. Перейти в ленту заявок и с помощью фильтра найдите подходящую. \n
                3. Открыть заявку и отправить в чат своё предложение в виде текста или загруженного объекта недвижимости.`}
              />
              <Accordion
                title="Сколько стоит откликнуться на заявку?"
                text={`Первые 14 дней для новых пользователей действует тестовый период, в рамках которого все отклики будут бесплатными!\n
                По итогу тестового периода вы можете выбрать подписку на месяц за фиксированную сумму и откликаться на заявки без ограничений.\n
                Или платить только за полученные контакты клиента. В этом случае стоимость контакта формируется индивидуально и предварительно отображается в карточке заявки.`}
              />
              <Accordion
                title="Какие гарантии, что заявки целевые?"
                text="В первую очередь важно отметить, что на платформе можно оставить заявку только после подтверждения своего номера телефона. По этой причине в 90% случаев до публикации доходят только реальные люди,  подтвердившие серьезность своих намерений.
                Кроме того, вы всегда можете выбрать работу только с теми заявками, которые прошли дополнительную квалификацию нашего колл-центра."
              />
              <Accordion
                title="Как связаться с клиентом, если заявки анонимные?"
                text={`Клиенту всегда можно написать в чат, задать вопросы и предложить там подборку объектов недвижимости. \n
                Если предложение заинтересует клиента, он сам инициирует обмен контактами для дальнейшего общения.`}
              />
              <Accordion
                title="Как опубликовать заявку?"
                text={`Опубликовать заявку для поиска недвижимости на платформе Umnoj может любой зарегистрированный пользователь.\n
                Достаточно перейти по кнопке «Создать заявку» и ответить на несколько простых вопросов о недвижимости, которую вы ищите. Это займёт всего пару минут.
                После чего заявка публикуется в анонимном режиме. Вы сами решаете, кому и когда открывать свои контактные данные.`}
              />
              <Accordion
                title="Как загрузить объект недвижимости?"
                text={`Загрузить объект недвижимости на платформу Umnoj может любой зарегистрированный пользователь.\n
                Достаточно перейти по кнопке «Загрузить объект» и ответить на несколько вопросов о недвижимости, которую хотите добавить. После чего страница объекта будет опубликована в разделе «Мои объекты».\n
                Важно! \nUmnoj не является классическим порталом недвижимости, где собственники размещают свои объекты в открытом каталоге. В данном случае вы сами решаете, кому и когда предлагать свою недвижимость.`}
              />
            </div>
            <div className={styles.right}>
              <p>Если не нашли ответ на свой вопрос, тогда напишите в <a href="./">поддержку</a></p>
              <img src="./img/feedback.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
