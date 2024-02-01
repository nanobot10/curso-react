import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { v4 as uuidv4 } from 'uuid';
import { formatearFecha } from "~/utils/helpers";

export function meta({data}) {
    console.log(data);
    if(!data) {
      return [
        {
          title: `GuitarraLA - Entrada no encontrada`
        },
        {
          description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
      ]
    }
  
    return [
      {
        title: `GuitarLA - ${data.data[0].attributes.tiutlo}`
      },
      {
        description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.tiutlo}`
      }
    ]
  }


export async function loader({ params }) {
  const { blogUrl } = params;
  const post = await getPost(blogUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export default function Post() {
  const post = useLoaderData();
  const { tiutlo, contenido, imagen, publishedAt } = post?.data[0].attributes;
  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen.data?.attributes?.url}
        alt={`imagen blog ${tiutlo}`}
      />
      <div className="contenido">
        <h3>{tiutlo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        {contenido.length &&
          contenido.map((d) => (
            <p className="resumen" key={uuidv4()}>
              {d.children.map((c) => c.text).join()}
            </p>
          ))}
      </div>
    </article>
  );
}
