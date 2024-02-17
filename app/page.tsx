/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Card from "./components/Card";
import styles from "./styles/Home.module.scss";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";


export default async function Home() {
  const STACKS = [
    {
      title: "React.js",
      color: "#149ECA",
    },
    {
      title: "Next.js",
      color: "#000000",
    },
    {
      title: "Node.js",
      color: "#4AAF53",
    },
    {
      title: "PostgreSQL",
      color: "#305D8D",
    },
  ];
  return (
    <>
      <section
        className={`${styles["height-page"]} flex items-center justify-center`}
      >
        <div className="wrapper">
          <h2 className="text-5xl text-center">
            Hello! I&apos;m <strong>Lucas Neves</strong>
          </h2>
          <h3 className="text-5xl mt-4 text-center">
            A <strong>Front-end developer</strong> based in Brazil.
          </h3>
          <p className="text-xl mt-8">
            Trabalho como desenvolvedor <strong>front-end</strong> desde 2014.
            Nesse período, tive a oportunidade de participar de vários projetos
            em diferentes setores.
          </p>
          <p className="text-xl mt-4">
            Atuei em clientes como{" "}
            <strong>
              Raia Drogasil, Serasa Experian, Grupo Whirlpool, Petrobrás
            </strong>
            , entre outros.
          </p>
          <p className="text-xl mt-4">
            Busco sempre entregas excelência e criatividade, disponibilizando
            soluções eficazes e com uma atenção especial a experiência do
            usuário.
          </p>
          <ul className="social mt-10 flex gap-5 items-center justify-center">
            <li>
              <a href="https://www.linkedin.com/in/lucasoneves/?locale=en_US">
                <FaLinkedinIn className=" w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://github.com/lucasoneves">
                <FaGithub className=" w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles["height-page"]}>
        <article className="mt-32">
          <h3 className="text-5xl text-center">
            <strong>Minha stack</strong>
          </h3>
          <ul className={`${styles["stacks"]} mt-10 text-center`}>
            {STACKS.map((stack) => (
              <Card color={stack.color} key={stack.title}>
                {stack.title}
              </Card>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
