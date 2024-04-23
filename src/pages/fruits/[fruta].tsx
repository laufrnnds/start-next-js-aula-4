import DefaultLayout from "@/layout/default";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          fruta: "banana",
        },
      },
      {
        params: {
          fruta: "laranja",
        },
      },
      {
        params: {
          fruta: "morango",
        },
      },
    ],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<{ fruit: string }> = async (
  context
) => {
  const { params } = context;

  console.log(params);

  const res = await fetch(`http://localhost:3333/frutas/${params?.fruta}`);
  const dataRes = await res.json();

  const fruit = dataRes.data;

  return { props: { fruit }, revalidate: 10 };
};

export default function Fruta({
  fruit,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <>
      <h1>Detalhe da Fruta</h1>
      {fruit}
      {router.isFallback && <h1>Error</h1>}
    </>
  );
}

Fruta.getLayout = DefaultLayout;
