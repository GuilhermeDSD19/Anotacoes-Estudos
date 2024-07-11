import styled from "styled-components"
import logo from '/public/assets/logo.png'

const RodapeEstilizado = styled.footer`
  display: none;
  @media screen and (min-width: 1024px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125px;
    background-color: var(--preto);
    border-top: 4px solid var(--azul);
    box-shadow: 0px 5px 29px 0px #2271D1B2;
    >img{
      width: 168px;
    }
  }
`

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <img src={logo} alt="Logo da AluraFlix" />
    </RodapeEstilizado>
  )
}

export default Rodape