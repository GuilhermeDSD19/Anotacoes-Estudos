import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../../public/assets/logo.png"
import Navegacao from "../Navegacao"

const CabecalhoEstilizado = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
  padding: 40px 50px;
  background-color: var(--preto);
  position: fixed;
  bottom: 0;
  border-top: 4px solid var(--azul);
  box-shadow: 0px 5px 29px 0px var(--azul);
  z-index: 1;
  >a>img{
    display: none;
  }
  @media screen and (min-width: 1024px){
    justify-content: space-between;
    position: relative;
    border-top: none;
    border-bottom: 4px solid var(--azul);
    z-index: 0;
    >a>img{
      display: inline;
      width: 168px;
    }
  }
`

const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <Link>
        <img src={logo} alt="Logo da ALuraFlix" />
      </Link>
      <Navegacao />
    </CabecalhoEstilizado>
  )
}

export default Cabecalho