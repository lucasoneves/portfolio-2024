import styles from './styles/Home.module.scss';

export default async function Home() {
  return (
    <section className="mt-40">
      <h2 className="text-5xl">
        Hello! I&apos;m <strong>Lucas Neves</strong>
      </h2>
      <h3 className="text-5xl mt-4">
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
        <h3 className="text-5xl">
          <strong>Minha stack</strong>
        </h3>
        <ul className={`${styles['stacks']} mt-10 text-center`}>
          <li className="text-xl mt-5">
            <strong className="block mb-3 text-2xl">HTML</strong>Com foco no uso correto das tags{" "}
            <strong>HTML</strong>, aperfeiçoando a acessbilidade e usabilidade.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>CSS</strong>Trabalho com funcionalidades modernas do{" "}
            <strong>CSS</strong>, como{" "}
            <strong>CSS Grid, Flexbox, CSS Modules</strong>, entre outros.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>Javascript</strong>Utilizo <strong>Javascript</strong>{" "}
            para adicionar interatividade ao seu projeto, utilizando
            tecnologias modernas como <strong>React.js e Vue.js</strong>, e seus
            frameworks, <strong>Next.js e Nuxt.js</strong>, respectivamente.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>Node.js</strong>Também atuo com desenvolvimento de
            API&apo;s com <strong>Express.js</strong>, possibilitando o consumo
            dos dados externamente.
          </li>
          <li className="text-xl mt-5">
            <strong className='block mb-3 text-2xl'>PostgreSql</strong>Tenho familiaridade com banco de dados,
            utilizando <strong>PostgreSql</strong> como ORM.
          </li>
        </ul>
      </article>
    </section>
  );
}
