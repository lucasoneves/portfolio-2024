import { ReactNode } from "react";
import styles from './Card.style.module.scss'

type Card = {
  children: ReactNode;
};

function Card({ children }: { children: ReactNode }) {
  return <article className={`${styles['card']} p-4 backdrop-blur-2xl flex items-center flex-col justify-center rounded-lg`}>{children}</article>;
}

export default Card;
