const Navbar = () => {
  return (
    <>
      <div className="header__navbar">
        <button className="btn-reset navbar__btn navbar__btn--leads"><span>заявки</span></button>
        {/* <button className="btn-reset navbar__btn navbar__btn--objects In__development"><span>объекты</span></button> */}
        <button className="btn-reset navbar__btn navbar__btn--about In__development"><span>О нас</span></button>
        <button className="btn-reset navbar__btn navbar__btn--rieltors In__development"><span>риелторам</span></button>
        <button className="btn-reset navbar__btn navbar__btn--faq In__development"><span>FAQ</span></button>
        {/* <button className="btn-reset navbar__btn navbar__btn--learns In__development"><span>база знаний</span></button> */}
      </div>
    </>
  )
}

export default Navbar;