import { Outlet } from "react-router-dom"
import Cabecalho from "../../componentes/Cabecalho"
import EstilosGlobais from "../../componentes/EstilosGlobais"
import VideosProvider from "../../contexto/VideosContexto"
import Rodape from "../../componentes/Rodape"

const PaginaBase = () => {
  return (
    <>
      <EstilosGlobais />
      <Cabecalho /> 
      <VideosProvider>
        <Outlet />
      </VideosProvider>
      <Rodape />
    </>
  )
}

export default PaginaBase