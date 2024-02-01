import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
    },
    {
      description: "GuitarLA - Nuestra coleccion",
    },
  ];
}

export async function loader() {
  return await getGuitarras();
}

const Tienda = () => {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras.data} />;
};

export default Tienda;
