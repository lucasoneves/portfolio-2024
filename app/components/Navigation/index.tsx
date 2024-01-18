"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
export default function Navigation() {
  const pathname = usePathname();
  const MENU = [
    {
      label: "Home",
      path: "/",
      id: "a520f942-2c06-4061-89b9-c1c7bfb9aa84",
    },
    {
      label: "Projects",
      path: "/projects",
      id: "08076e0c-4b02-4418-abec-730746c093aa",
    },
    {
      label: "Resume",
      path: "/resume",
      id: "4c2ddf25-9542-46be-a62f-99610b2ed07b",
    },
    {
      label: "Contact",
      path: "/contact",
      id: "d82852d8-b789-463c-90b4-2bae89426c0c",
    },
    {
      label: "Blog",
      path: "/blog",
      id: "7ee08531-d05d-467c-b9e9-21a474191d60",
    },
  ];
  return (
    <nav>
      <ul className="flex center justify-between gap-10">
        {MENU.map((menuItem) => {
          return (
            <Link
              href={menuItem.path}
              key={menuItem.id}
              className={`px-2 p-1 rounded-md ${
                pathname === menuItem.path ? `${styles["active"]}` : ""
              }`}
            >
              {menuItem.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
