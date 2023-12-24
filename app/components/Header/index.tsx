import { ReactNode } from "react";
import styles from "./Header.module.scss";
import Container from "../Container";

type HeaderTypes = {
  children: ReactNode;
  siteTitle?: string
};

export default function Header({ children, siteTitle }: HeaderTypes) {
  return (
    <header className={styles["header"]}>
      <Container className="flex items-center justify-between">
        <h1>{siteTitle}</h1>
        {children}
      </Container>
    </header>
  );
}
