import styles from "./index.module.scss"



export default function HowItWorks() {


  return (
    <>
      <section className={styles.howitworks}>
        <div className="container__fluid">
          <h4 className="section__title">Как это работает?</h4>

          <div className={styles.grid}>
            <div className={styles.column}>
              <img src="../img/column1.png" alt="" />
              <div className={styles.text__content}>
                <div className={styles.title}>
                  <span className="blue-text">Зарегистрируйтесь</span><br /> и настройте профиль
                </div>
                <p className={styles.text}>Ответьте на несколько простых вопросов про себя и недвижимость, которую вы предлагаете</p>
              </div>

            </div>
            <div className={styles.column}>
              <img src="../img/column2.svg" alt="" />
              <div className={styles.text__content}>
                <div className={styles.title}>
                  <span className="blue-text">Откликнитесь</span><br />  на подходящие заявки
                </div>
                <p className={styles.text}>
                  Обсудите с клиентом все вопросы в чате и предложите ему лучшие варианты недвижимость
                </p>
              </div>

            </div>
            <div className={styles.column}>
              <img src="../img/column3.svg" alt="" />
              <div className={styles.text__content}>
                <div className={styles.title}>
                  <span className="blue-text">Получайте контакты</span><br />
                  от целевых клиентов
                </div>
                <p className={styles.text}>
                  Клиент сам откроет контакты для дальнейшей работы, если ваше предложение его заинтересует
                </p>
              </div>


            </div>
          </div>
        </div>

      </section >
    </>
  )
}
