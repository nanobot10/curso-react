import Layout from "@/components/layout";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

export default function Post({ post }) {
  const { contenido, tiutlo, imagen, publishedAt } = post[0].attributes;
  return (
    <Layout
        title={`GuitarLA - ${tiutlo}`}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={400}
          alt={`imagen del blog ${tiutlo}`}
        />
        <div className={styles.contenido}>
          <h3>{tiutlo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          {contenido.map((d) => (
            <p className={styles.resumen} key={uuidv4()}>
              {d.children.map((c) => c.text).join()}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
}
