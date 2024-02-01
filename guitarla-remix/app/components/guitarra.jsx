
import { Link } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

const guitarra = ({guitarra}) => {
    
    const { descripcion, imagen, precio, url, nombre } = guitarra;
    
  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
       <div className="contenido">
            <h3>{nombre}</h3>
            {
                
                descripcion.length && (
                    descripcion.map(d => (
                        <p className='descripcion' key={uuidv4()}>{d.children.map(c => c.text).join()}</p>
                    ))
                )
            }
            <p className='precio'>${precio}</p>
            <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
       </div>
    </div>
  )
}

export default guitarra
