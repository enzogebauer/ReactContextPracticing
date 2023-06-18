import { UseAppContext } from "../hook/UseAppContext"
import { Pai } from "./Pai"

export function Avo() {
  const { descricao } = UseAppContext()
  return (
    <>
      <h1>Avô</h1>
      <p>Descrição do AVÔ: {descricao}</p>
      <Pai />
    </>
  )
}
