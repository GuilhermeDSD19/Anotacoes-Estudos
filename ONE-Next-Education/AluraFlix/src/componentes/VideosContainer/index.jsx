import styled from "styled-components"
import CategoriaContainer from "../CategoriaContainer"
import { useVideosContext } from "../../contexto/VideosContexto"

const VideosContainerEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 40px;
  padding: 0 10px;
`

const VideosContainer = () => {
  const categorias = useVideosContext().categorias
  const videos = useVideosContext().videos

  if (videos.length === 0 || categorias.length === 0) {
    return null
  }

  return (
    <VideosContainerEstilizado>
      {categorias.map((categoria) => (
        <CategoriaContainer
          key={categoria.tecnologia}
          categorias={categoria}
          videos={videos.filter((video) => video.tecnologia === categoria.tecnologia)}
        />)
      )}
    </VideosContainerEstilizado>
  )
}

export default VideosContainer