import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/guitarras.module.css"


export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen guitarra ${nombre}`}
        width={400}
        height={80}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        {descripcion.map((d) => (
            <p className={styles.descripcion} key={uuidv4()}>
              {d.children.map((c) => c.text).join()}
            </p>
          ))}
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
