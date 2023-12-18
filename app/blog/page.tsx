'use server';
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Image from "next/image";
import { ReactNode } from "react";
import Container from "../components/Container";

const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/clq1gfmmn27jk01uk799k5kp3/master',
  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDIzMzE4NjUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xxMWdmbW1uMjdqazAxdWs3OTlrNWtwMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDI1MDk5YzYtZmFjNi00Yzc5LWE1YmEtNGQxZWJkY2QzZjc2IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.JSnh0eW0cs4mB0hjAl7faMDsAJ4QkWHnLIuN2KTZ5BlWvn-kmezYQtBVD3SApttVeWOJLbKPWI-UJy7u-kRPOsTSj76KCdZK43FKl6MovdapEswAbXDGeotFVnT2Ni2aa6-cTsSLMs0cqk_GNGw_kZ87-cQZJ2i0p2dVPKCZsWxLl_YBeSTnkEJnQ3J4xpIpALIiGMyU8hJIdRpP-HxpK8F8t8OKQJL_GF0jW4pZWGg1PF4ked4Aeo6cCcQyWyi2WPSgvMNml9u9DTKWza76TrNgPblfTprwXrL_jiAf07AUYBju_Vh2FIvMIYgbjRmMJDOUA-efEUhyRLirOI-k3UINIgU_M3M5bhecXmMHlxJ79n855CYGt6oe6mQgJyfNr21SvSD5Mr8_0KQRVjU1Qd8yqu06pGvRC5Ny4F6x-QtIy2asb15ZBcUG07x8Fym6TWvBhDRVKxNZltn5Go6JUIY39gHqFbv4pKn12jMgDWjaDFibuC29IwsZExI-3fwi-3-1ENnH2fEUa4NRlcYH-L9jErLyBv31MYc8Kx3yXHIUla9nzZcEV_qEhZ6KsGeC9y0JNpBYe1qajvkRtFF9glf-tVWcTpF4BxCZAALeqOPEhXXHb9_OdyYR2kjOBdQMaHMTtdyTmfa9Du9324TZn0l9u-U6jKNk2NdjfBrcO2I'
    }
  }
);


const QUERY = gql`
  {
    posts {
      id
      title
      coverImage {
        url(transformation: {image: {resize: {width: 400}}})
      }
      content {
        markdown
      }
    }
  }
`;

async function getData() {
  const { posts }: any = await hygraph.request(QUERY);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!posts) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return {
    props: {
      posts
    }
  }
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  coverImage: {
    url: string;
  };
  content: {
    html: ReactNode
  }
};

export default async function Page() {
  
  const data = await getData();

  return (
    <main>
      <ul>
        {data.props.posts?.map((item: Post) => (
          <li className="mt-10 p-2" key={item.id}>
            {item.title}
            <Image src={item.coverImage.url} width={400} height={300} alt="" />
            {item.content.html}
          </li>
        ))}
      </ul>
    </main>
  );
}
