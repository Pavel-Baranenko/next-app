

export default function Offer() {


  return (
    <>
      <div className="container">
        <div className="offer__wrapper">
          <div className="offer__top border-item">
            <div className="offer-id">Заявка #12342323</div>
            <div className="offer-date">Создана 12 января, 12:09</div>
            <div className="offer-views">
              <img src="./img/eye-offer.svg" alt="" />
              <span>294</span>
            </div>
            <button className="offer-menu btn-reset">
              <img src="./img/open-submenu.svg" alt="" />
            </button>
          </div>
          <div className="offer-middle border-item">
            <div className="offer-price">100 500 000 – 3 000 000 000 ₽</div>
            <button className="btn-reset offer-public"><span>Опубликована</span> <img src="./img/green-arrow.svg" alt="" /></button>
          </div>
          <div className="offer-info">
            <div className="offer-info__item">
              <span>Город</span>
              <p>Москва</p>
            </div>
            <div className="offer-info__item">
              <span>Районы</span>
              <p>Митино / Отрадное / Измайлово / Солнцево / Лефортов / Измайлово / Митино</p>
            </div>
            <div className="offer-info__item">
              <span>Формат сделки</span>
              <p>Покупка</p>
            </div>
            <div className="offer-info__item">
              <span>Тип</span>
              <p>Лофт</p>
            </div>
            <div className="offer-info__item">
              <span>Состояние</span>
              <p>Новая</p>
            </div>
            <div className="offer-info__item">
              <span>Год постройки</span>
              <p>2024 / II квартал</p>
            </div>
            <div className="offer-info__item">
              <span>Общая площадь</span>
              <p>294 м²</p>
            </div>
            <div className="offer-info__item">
              <span>Жилая площадь</span>
              <p>130 м²</p>
            </div>
            <div className="offer-info__item">
              <span>Площадь кухни</span>
              <p>64 м²</p>
            </div>
            <div className="offer-info__item">
              <span>Всего комнат</span>
              <p>10</p>
            </div>
            <div className="offer-info__item">
              <span>Спален</span>
              <p>6</p>
            </div>
            <div className="offer-info__item">
              <span>Санузлов</span>
              <p>2</p>
            </div>
            <div className="offer-info__item">
              <span>Цель покупки</span>
              <p>Для проживания / Сдавать в аренду / Перепродать</p>
            </div>
            <div className="offer-info__item">
              <span>Срочность покупки</span>
              <p>Вопрос срочный</p>
            </div>
            <div className="offer-info__item">
              <span>Способ покупки</span>
              <p>В ипотеку</p>
            </div>
            <div className="offer-info__item">
              <span>Одобрение ипотеки</span>
              <p>В процессе</p>
            </div>
            <div className="offer-info__item">
              <span>Пожелания</span>
              <p>Нужно достаточно места для комфортного проживания и возможности обустройства квартиры.
                В одной комнат будет кабинет или гостевая комната</p>
            </div>

          </div>

        </div>
        <button className="offer-edit">
          <img src="./img/edit.svg" alt="" />
          Редактировать заявку</button>
      </div>
    </>
  )
}
