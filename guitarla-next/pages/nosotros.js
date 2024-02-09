import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre nosotros, GuitarLA - nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image alt="sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800}/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              pariatur earum vero, autem soluta quo voluptate dolore est
              voluptas voluptates iste deleniti. Ducimus, vero obcaecati! Id
              distinctio labore aut rem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. 
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              pariatur earum vero, autem soluta quo voluptate dolore est
              voluptas voluptates iste deleniti. Ducimus, vero obcaecati! Id
              distinctio labore aut rem. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
