import { useState } from "react"
import { AppContext } from "./AppContext"
export function AppProvider({ children }) {
  const [descricao, setDescricao] = useState("Sou muito pica")
  return (
    <AppContext.Provider value={{ descricao, setDescricao }}>{children}</AppContext.Provider>
  )
}