import styles from "./index.module.scss"

export default function ParamsInfo() {


  return (
    <>
      <section className={styles.params}>
        <div className="container__fluid">
          <h4 className="section__title">Параметры заявок</h4>
          <span className="section__subtitle">Запросы, с которыми чаще всего обращаются клиенты</span>
          <div className={styles.box}>
            <div className={styles.line}>
              <div className={styles.title}>Формат сделки</div>
              <div className={styles.grid}>
                <span className={styles.item}>Покупка</span>
                <span className={styles.item}>Аренда</span>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.title}>Расположение</div>
              <div className={styles.grid}>
                <span className={styles.item}>Москва</span>
                <span className={styles.item}>Санкт-Петербург</span>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.title}>Тип</div>
              <div className={styles.grid}>
                <span className={styles.item}>Квартира</span>
                <span className={styles.item}>Дом</span>
                <span className={styles.item}>Земля</span>
                <span className={styles.item}>Коммерческая</span>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.title}>Состояние</div>
              <div className={styles.grid}>
                <span className={styles.item}>Новая</span>
                <span className={styles.item}>Вторичная</span>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.title}>Цель покупки</div>
              <div className={styles.grid}>
                <span className={styles.item}>Для проживания</span>
                <span className={styles.item}>Сдавать в аренду</span>
                <span className={styles.item}>Перепродать</span>
                <span className={styles.item}>Сохранить деньги</span>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.title}>Бюджет</div>
              <div className={styles.grid}>
                <span className={styles.item}>От  2 500 000 ₽</span>
                <span className={styles.item}>До 500 000 000 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
