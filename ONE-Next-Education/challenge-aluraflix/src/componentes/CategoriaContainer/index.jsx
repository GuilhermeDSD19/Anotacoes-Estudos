import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import VideoCard from "../VideoCard"

const VideoContainerCardEstilizado = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  gap: 20px;
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--azul);
  &::-webkit-scrollbar{
    height: 10px;
  }
  &::-webkit-scrollbar{
    background-color: #2271d12b;
    border: 5px;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--azul);
    border-radius: 20px;
  }
`

const CategoriaContainer = ({ categorias, videos }) => {
  const temVideos = videos.length > 0

  return (
    temVideos
      && <>
          <TituloCategoria cor={categorias.cor}>
            {categorias.tecnologia}
          </TituloCategoria>
          <VideoContainerCardEstilizado>
            {videos.map((video) => <VideoCard key={video.titulo} cor={categorias.cor} video={video} />)}
          </VideoContainerCardEstilizado>
        </>
  )
}

export default CategoriaContainer