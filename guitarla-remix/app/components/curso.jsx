import { v4 as uuidv4 } from "uuid";

export default function Curso({ curso }) {
  const { contenido, imagen, Titulo } = curso;
  return (
    <section className="curso">

      <style jsx="true">
        {`
          .curso {
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url})
          }
        `}
      </style>

      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{Titulo}</h2>
          {contenido.length &&
            contenido.map((d) => (
              <p className="texto" key={uuidv4()}>
                {d.children.map((c) => c.text).join()}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}
