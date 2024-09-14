import { useVideosContext } from "../../contexto/VideosContexto"
import botaoX from "../../../public/assets/x.svg"
import Formulario from "../Formulario"
import styled from "styled-components"

const Overlay = styled.div`
  background-color: #000000b2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 380px;
  left: 0%;
  width: 374px;
  background-color: #03122F;
  padding: 70px 0 60px 0;
  border: 5px solid #6BD1FF;
  border-radius: 15px;
  @media screen and (min-width: 1024px){
    width: 865px;
  }
`

const TituloModalEstilizado = styled.h2`
  width: 100%;
  margin-bottom: 40px;
  font-weight: 900;
  font-size: 2rem;
  color: var(--azul);
  text-align: center;
  @media screen and (min-width: 1024px){
    font-size: 3.75rem;
    text-align: left;
    max-width: 575px;
    margin: 0 auto 40px;
  }
`

const BotaoModalEstilizado = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const EditarCard = ({ cardSelecionado }) => {
  const videoContexto = useVideosContext()

  function fecharModal() {
    videoContexto.editarCard(null)
  }

  return (
    cardSelecionado &&
    <>
      <Overlay onClick={() => fecharModal()} />
      <DialogEstilizado onClose={() => fecharModal()} open={!!cardSelecionado}>
        <TituloModalEstilizado>EDITAR CARD:</TituloModalEstilizado>
        <Formulario metodo="dialog" video={cardSelecionado} />
        <BotaoModalEstilizado onClick={() => fecharModal()}>
          <img src={botaoX} alt="Desenho de um X" />
        </BotaoModalEstilizado>
      </DialogEstilizado>
    </>
  )
}

export default EditarCard