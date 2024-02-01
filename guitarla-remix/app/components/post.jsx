import { Link } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';
import { formatearFecha } from '~/utils/helpers';

const Post = ({post}) => {
    const {contenido, imagen, tiutlo, url, publishedAt} = post;
    const fecha = formatearFecha(publishedAt);
  return (
    <article className='post'>
        <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${tiutlo}`} />
        <div className='contenido'>
            <h3>{tiutlo}</h3>
            <p className='fecha'>{fecha}</p>
            {
                
                contenido.length && (
                    contenido.map(d => (
                        <p className='resumen' key={uuidv4()}>{d.children.map(c => c.text).join()}</p>
                    ))
                )
            }
            <Link className='enlace' to={`/blog/${url}`}>Leer Post</Link>

        </div>
    </article>
  )
}

export default Post