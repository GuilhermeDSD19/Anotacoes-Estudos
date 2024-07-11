import styled from "styled-components"
import { useVideosContext } from "../../contexto/VideosContexto"
import NaoEncontrada from "../NaoEncontrada"
import { useParams } from "react-router-dom"

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  margin: 100px auto 120px;
  min-height: 500px;
  >iframe{
    width: 90%;
    max-width: 560px;
    min-height: 320px;
    flex: 1;
  }
  @media screen and (min-width: 1024px){
    margin-top: 25px;
    margin-bottom: 0;
    padding: 50px;
    height: calc(100vh - 250px);
  }
`

const TituloEstilizado = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 900;
`

const Player = () => {
  const parametros = useParams()
  const videos = useVideosContext().videos
  const videoClicado = videos.find((video) => Number(video.id) === Number(parametros.id))

  if (!videoClicado) {
    return <NaoEncontrada />
  }
  
  return (
    <SectionEstilizado>
      <TituloEstilizado>{videoClicado.titulo}</TituloEstilizado>
      <iframe
        src={videoClicado.link}
        title={videoClicado.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      >
      </iframe>
    </SectionEstilizado> 
  )
}

export default Player