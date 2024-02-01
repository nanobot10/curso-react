import Guitarra from "~/components/guitarra";

export default function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h2 className="heading">Nuestra Coleccion</h2>
      {
        <div className="guitarras-grid">
          {guitarras &&
            guitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
        </div>
      }
    </>
  );
}
