export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    return await respuesta.json();
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`);
    return await respuesta.json();
}