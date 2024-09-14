import styled from "styled-components"

const ContainerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 148px 200px;
`

const TituloEstilizado = styled.h2`
  font-size: 60px;
  font-weight: 800;
`

const ParagrafoEstilizado = styled.p`
  font-size: 25px;
  font-weight: 400;
`

const NaoEncontrada = () => {
  return (
    <ContainerEstilizado>
      <TituloEstilizado>
        Ops! Página não encontrada
      </TituloEstilizado>
      <ParagrafoEstilizado>
        Volte para a página inicial.
      </ParagrafoEstilizado>
    </ContainerEstilizado>
  )
}

export default NaoEncontrada