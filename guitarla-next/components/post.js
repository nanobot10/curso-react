import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

export default function Post({ post }) {
  const { contenido, imagen, tiutlo, url, publishedAt } = post;
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen del blog ${tiutlo}`}/>
        <div className={styles.contenido}>
            <h3>{tiutlo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            {contenido.map((d) => (
            <p className={styles.resumen} key={uuidv4()}>
              {d.children.map((c) => c.text).join()}
            </p>
          ))}
          <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
