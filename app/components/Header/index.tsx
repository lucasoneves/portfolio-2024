import { ReactNode } from "react";
import styles from "./Header.module.scss";
import Container from "../Container";

type HeaderTypes = {
  children: ReactNode;
};

export default function Header({ children }: HeaderTypes) {
  return (
    <header className={styles["header"]}>
      <Container>
        <h1>Simples tech blog</h1>
        {children}
      </Container>
    </header>
  );
}
