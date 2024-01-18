/* eslint-disable react/no-unescaped-entities */
import styles from './styles/Home.module.scss';

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
        <ul className={`${styles['stacks']} mt-10 text-center`}>
          <li className="text-xl mt-5">
            <strong className="block mb-3 text-2xl">HTML</strong>Acessbilidade, semântica e SEO.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>CSS</strong>
            <strong>CSS Grid, Flexbox, CSS Modules</strong>, <strong>Tailwind</strong>, entre outros.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>Javascript</strong><strong>React.js, Vue.js</strong> e seus
            frameworks, <strong>Next.js e Nuxt.js</strong>, respectivamente.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>Node.js</strong>Desenvolvimento de
            API's com <strong>Express.js</strong>
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>PostgreSql</strong>
            Utilizo <strong>Prisma</strong> como ORM.
          </li>
        </ul>
      </article>
    </section>
  );
}
