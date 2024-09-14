import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "../src/paginas/PaginaBase"
import Inicial from "./paginas/Inicial"
import NovoVideo from "./paginas/NovoVideo"
import NaoEncontrada from "./paginas/NaoEncontrada"
import Player from "./paginas/Player"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicial />} />
          <Route path="novovideo" element={<NovoVideo />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes