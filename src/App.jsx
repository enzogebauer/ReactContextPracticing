import './App.css'
import { Avo } from './components/Avo'
import { AppProvider } from './context/AppProvider'
export function App() {

  return (
    <AppProvider>
      <Avo />
    </AppProvider>
  )
}

