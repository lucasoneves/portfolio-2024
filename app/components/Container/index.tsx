import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerTypes = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerTypes) {
  return (
    <div className={` max-w-5xl ${` px-2 ml-auto mr-auto`} ${className ? className : ''}`}>{children}</div>
  );
}
