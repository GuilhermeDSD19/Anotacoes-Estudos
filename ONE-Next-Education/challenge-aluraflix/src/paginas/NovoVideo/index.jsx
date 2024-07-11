import Formulario from "../../componentes/Formulario"
import styled from "styled-components"

const NovoVideoContainerEstilizado = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 90px auto 120px;
  padding: 0 10px;
  position: sticky;
`

const TituloEstilizado = styled.h2`
  text-align: center;
  font-size: 60px;
  font-weight: 900;
  color: var(--branco);
  margin-bottom: 20px;
`

const ParagrafoEstilizado = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: var(--branco);
  margin-bottom: 40px;
`

const FormularioContainerEstilizado = styled.div`
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SubtituloEstilizado = styled.h3`
  padding: 15px;
  font-size: 36px;
  width: 100%;
  text-align: center;
  color: var(--branco);
  font-weight: 600;
  border-top: 3px solid #393939;
  border-bottom: 3px solid #393939;
  margin-bottom: 20px;
`

const NovoVideo = () => {
  return (
    <NovoVideoContainerEstilizado>
      <TituloEstilizado>NOVO VÍDEO</TituloEstilizado>
      <ParagrafoEstilizado>
        COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.
      </ParagrafoEstilizado>
      <FormularioContainerEstilizado>
        <SubtituloEstilizado>Criar Card</SubtituloEstilizado>
        <Formulario />
      </FormularioContainerEstilizado>
    </NovoVideoContainerEstilizado>
  )
}

export default NovoVideo