import { UseAppContext } from "../hook/UseAppContext"
import { Filho } from "./Filho"
export function Pai() {
  const {descricao,  setDescricao } = UseAppContext()
  return (
    <>
      <p>Descrição no pai: {descricao}</p>
       <Filho />
    <button  style={{padding:'15px'}} onClick={() => setDescricao("mudei no pai a descricao do avo")}>Mude o nome no pai</button>
  
    </>
   )
}