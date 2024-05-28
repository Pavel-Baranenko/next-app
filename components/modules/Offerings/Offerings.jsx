

export default function Offerings() {


  return (
    <>
      <div className="container">
        <div className="offerings__wrapper">
          <div className="offerings">
            <div className="offerings__item">
              <img src="./img/avatar.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Ангелина Синичкина</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.8</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-btn">
                <img src="./img/offerings__item-btn.svg" alt="" />
              </button>
            </div>
            <div className="offerings__item">
              <img src="./img/avatr-8.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Андрей Макеев</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="no-rating">
                    <img src="./img/grey-star.svg" alt="" />
                    <span>Без оценок</span>
                  </div>
                </div>
              </div>
              <button className="offerings__item-btn">
                <img src="./img/offerings__item-btn.svg" alt="" />
              </button>
            </div>
            <div className="offerings__item">
              <img src="./img/avatr-9.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Константин Гриндин</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.1</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-btn">
                <img src="./img/offerings__item-btn.svg" alt="" />
              </button>
              <span className="offerings__item-notices">1</span>
            </div>
            <div className="offerings__item">
              <img src="./img/avatr-7.png" alt="" className="offerings__img" />
              <div className="offerings__item-info">
                <div className="offerings__item-name">
                  <span>Валентина Антонова</span>
                  <div className="offerings__verify">
                    <img src="./img/pass-up.svg" alt="" />
                  </div>
                </div>
                <div className="offerings__item-role">Агент</div>
                <div className="offerings__item-bottom">
                  <div className="rating">
                    <img src="./img/star.svg" alt="" />
                    <span>4.1</span>
                  </div>
                  <p>28 отзывов</p>
                </div>
              </div>
              <button className="offerings__item-btn">
                <img src="./img/offerings__item-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
