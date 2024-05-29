import { React, useState } from "react";
import styles from "./index.module.scss"

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  let toggleHandler = (e) => {
    setOpen(!open);
  };
  return (
    <div className={open ? styles.accordion__item__open : styles.accordion__item}>
      <div className={styles.accordion__header} onClick={toggleHandler}>
        <h4>{title}</h4>
      </div>
      <p className={styles.accordion__content}>{children}</p>
    </div>
  );
}

export default Accordion;