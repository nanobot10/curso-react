export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=*`);
    return await respuesta.json();
}

export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`);
    return await respuesta.json();
}