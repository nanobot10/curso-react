import { useState } from 'react'

export default function ComponenteReact() {
  const [cliente, setCliente] = useState("Dennis")
  return (
    <div>{cliente}</div>
  )
}
