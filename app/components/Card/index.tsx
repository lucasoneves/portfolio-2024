import { ReactNode } from "react";
import styles from "./Card.style.module.scss";

type Card = {
  children: ReactNode;
  color: string;
};

function Card({ children, color }: Card) {
  return (
    <article
      style={{ backgroundColor: color }}
      className={`${styles["card"]} p-4 shadow-md flex h-24 items-center justify-center font-bold rounded-lg text-xl`}
    >
      {children}
    </article>
  );
}

export default Card;
