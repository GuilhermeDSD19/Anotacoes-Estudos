import Banner from "../../componentes/Banner"
import EditarCard from "../../componentes/EditarCard"
import VideosContainer from "../../componentes/VideosContainer"
import { useVideosContext } from "../../contexto/VideosContexto"

const Inicial = () => {
  const videoSelecionado = useVideosContext().videoSelecionado

  return (
    <>
      <Banner />
      <VideosContainer />
      <EditarCard cardSelecionado={videoSelecionado} />
    </>
  )
}

export default Inicial