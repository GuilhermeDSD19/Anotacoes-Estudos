import styled from "styled-components"
import iconeDeletar from "../../../public/assets/lixeira.svg"
import iconeEditar from "../../../public/assets/lapis.svg"
import { useVideosContext } from "../../contexto/VideosContexto"
import { Link } from "react-router-dom"

const VideoCardEstilizado = styled.div`
  max-width: 390px;
  min-width: 390px;
  margin-bottom: 40px;
  @media screen and (min-width: 1024px){
    max-width: 432px;
    min-width: 432px;
  }
`

const VideoImagemEstilizado = styled.div`
  width: 100%;
  min-height: 260px;
  background: url(${(props) => props.$imagemDeFundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 5px solid ${(props) => props.$cor};
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 0px 17px 8px ${(props) => props.$cor} inset;
`

const ContainerCardBotaoEstilizado = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 59px;
  background-color: var(--preto);
  border: 5px solid ${(props) => props.$cor};
  border-top: none;
  border-radius: 0px 0px 15px 15px;
`

const CardBotaoEstilizado = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: transparent;
  border: none;
  color: var(--branco);
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
`

const VideoCard = ({ cor, video }) => {
  const videosContexto = useVideosContext()

  return (
    <VideoCardEstilizado>
      <Link to={`/${video.id}`}>
        <VideoImagemEstilizado $cor={cor} $imagemDeFundo={video.capa} />
      </Link>
      <ContainerCardBotaoEstilizado $cor={cor}>
        <CardBotaoEstilizado onClick={() => videosContexto.deletarVideo(video)}>
          <img src={iconeDeletar} alt="Ícone de uma lixeira" />
          DELETAR
        </CardBotaoEstilizado>
        <CardBotaoEstilizado onClick={() => videosContexto.editarCard(video)}>
          <img src={iconeEditar} alt="Ícone de um lápis" />
          EDITAR
        </CardBotaoEstilizado>
      </ContainerCardBotaoEstilizado>
    </VideoCardEstilizado>
  )
}

export default VideoCard