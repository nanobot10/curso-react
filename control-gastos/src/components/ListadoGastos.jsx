import Gasto from "./Gasto"


const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Gastos" : "Aun no has gastos"}</h2>
      {gastos.map( gasto => (
        <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar}/>
      ))}
    </div> 
  )
}

export default ListadoGastos