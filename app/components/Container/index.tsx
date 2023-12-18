import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerTypes = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerTypes) {
  return (
    <div className={`${`w-4/5 ml-auto mr-auto`} ${className ? className : ''}`}>{children}</div>
  );
}
