import Link from "next/link";

const RightSide = () => {

  return (
    <div className="header__right">
      {/* <div className="header__links list-reset">
        <Link href="" className="right__button btn-reset  btn-reset header__link--chats In__development"><span /></Link>
        <Link href="" className="right__button  btn-reset header__link--favourites In__development"><span /></Link>
        <Link href="./balance" className="right__button btn-reset header__link--balance">
          <span />
          <div className="user__balance">0 €</div>
        </Link>
      </div>
      <button className="btn-reset add__lead">создать</button>
      <Link href='./profile' className="user__avatar">
        <img src="../img/avatar.png" alt="" />
      </Link> */}


      <Link href="./login" className="login-link">Вход</Link>
      <Link href="./auth" className="singup-link">регистрация</Link>
    </div>
  )
}
export default RightSide;