import styles from "./index.module.scss"




export default function Rieltors() {


  return (
    <>
      <section className={styles.rieltors}>
        <div className="container__fluid">
          <h4 className="section__title">Топ-20 риелторов</h4>
          <span className="section__subtitle">
            Рейтинг лучших риелторов платформы на май 2024 год
          </span>
          <div className={styles.grid}>
            <div className={styles.item}>
              <img src="../img/avatar.png" alt="" className={styles.img} />
              <div className={styles.wrap}>
                <div className={styles.top}>
                  <div className={styles.name}>Имя фамилия</div>
                  <div className={styles.verify}></div>
                </div>
                <div className={styles.role}>Риелтор</div>
                <div className={styles.bottom}>
                  <div className={styles.rating}>4.9</div>
                  <div className={styles.feeds}>29 отзывов</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <img src="../img/avatar.png" alt="" className={styles.img} />
              <div className={styles.wrap}>
                <div className={styles.top}>
                  <div className={styles.name}>Имя фамилия</div>
                  <div className={styles.verify}></div>
                </div>
                <div className={styles.role}>Риелтор</div>
                <div className={styles.bottom}>
                  <div className={styles.rating}>4.9</div>
                  <div className={styles.feeds}>29 отзывов</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <img src="../img/avatar.png" alt="" className={styles.img} />
              <div className={styles.wrap}>
                <div className={styles.top}>
                  <div className={styles.name}>Имя фамилия</div>
                  <div className={styles.verify}></div>
                </div>
                <div className={styles.role}>Риелтор</div>
                <div className={styles.bottom}>
                  <div className={styles.rating}>4.9</div>
                  <div className={styles.feeds}>29 отзывов</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <img src="../img/avatar.png" alt="" className={styles.img} />
              <div className={styles.wrap}>
                <div className={styles.top}>
                  <div className={styles.name}>Имя фамилия</div>
                  <div className={styles.verify}></div>
                </div>
                <div className={styles.role}>Риелтор</div>
                <div className={styles.bottom}>
                  <div className={styles.rating}>4.9</div>
                  <div className={styles.feeds}>29 отзывов</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <img src="../img/avatar.png" alt="" className={styles.img} />
              <div className={styles.wrap}>
                <div className={styles.top}>
                  <div className={styles.name}>Имя фамилия</div>
                  <div className={styles.verify}></div>
                </div>
                <div className={styles.role}>Риелтор</div>
                <div className={styles.bottom}>
                  <div className={styles.rating}>4.9</div>
                  <div className={styles.feeds}>29 отзывов</div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.more}><span>+ 1 289 риелторов</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
