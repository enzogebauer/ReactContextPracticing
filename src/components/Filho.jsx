
import { UseAppContext } from "../hook/UseAppContext"

export function Filho() {
  const { setDescricao} = UseAppContext()
  return (
    <button style={{margin:'15px'}} onClick={() => setDescricao("mudei no filho")}>Mude o nome do Avô e do pai através do filho</button>
  )
}
