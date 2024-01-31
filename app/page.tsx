/* eslint-disable react/no-unescaped-entities */
import Card from "./components/Card";
import styles from "./styles/Home.module.scss";
import Image from "next/image";

export default async function Home() {
  return (
    <section className="mt-40">
      <h2 className="text-5xl text-center">
        Hello! I&apos;m <strong>Lucas Neves</strong>
      </h2>
      <h3 className="text-5xl mt-4 text-center">
        A <strong>Front-end developer</strong> based in Brazil.
      </h3>
      <p className="text-xl mt-8">
        Trabalho como desenvolvedor <strong>front-end</strong> desde 2014. Nesse
        período, tive a oportunidade de participar de vários projetos em
        diferentes setores.
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
        soluções eficazes e com uma atenção especial a experiência do usuário.
      </p>

      <article className="mt-32">
        <h3 className="text-5xl text-center">
          <strong>Minha stack</strong>
        </h3>
        <ul className={`${styles["stacks"]} mt-10 text-center`}>
          <Card>
              <Image
                alt="React.js Logo"
                width={40}
                height={40}
                className="mb-3"
                src={
                  "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                }
              />
            <strong className="block text-2xl">
              React{" "}
            </strong>
          </Card>
          <Card>
              <Image
                alt="React.js Logo"
                width={40}
                height={40}
                className="mb-3"
                src={
                  "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
                }
              />
            <strong className="block text-2xl">
              Next.js{" "}
            </strong>
          </Card>
          <Card>
              <Image
                alt="React.js Logo"
                width={40}
                height={40}
                className="mb-3"
                src={
                  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png"
                }
              />
            <strong className="block text-2xl">
              Vue.js{" "}
            </strong>
          </Card>
          <Card>
              <Image
                alt="React.js Logo"
                width={40}
                height={40}
                className="mb-3"
                src={
                  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
                }
              />
            <strong className="block text-2xl">
              Node.js{" "}
            </strong>
          </Card>
          <Card>
              <Image
                alt="React.js Logo"
                width={40}
                height={40}
                className="mb-3"
                src={
                  "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/nuxt-dot-js-512.png"
                }
              />
            <strong className="block text-2xl">
              Nuxt.js{" "}
            </strong>
          </Card>
          <Card>
            <strong className="block text-2xl">Express.js</strong>
          </Card>
          <Card>
            <strong className="block text-2xl">PostgreSql</strong>
          </Card>
          <Card>
            <strong className="block text-2xl">Prisma</strong>
          </Card>
        </ul>
      </article>
    </section>
  );
}
