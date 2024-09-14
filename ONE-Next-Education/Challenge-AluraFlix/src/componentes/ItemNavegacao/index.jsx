import styled from "styled-components"
import iconeCasa from "../../../public/assets/casa.svg"
import iconeMais from "../../../public/assets/mais.svg"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Botao from "../Botao"

const DivNavagacaoEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  >p {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 2px solid var(--azul);
    border-radius: 50px;
    padding: 6px 20px;
    background: #2271d13d;
    color: var(--azul);
    font-weight: 900;
    font-size: 1.25rem;
  }
`

const ItemNavegacao = ({ url, imagem, imagemAtiva, children, reverter }) => {
  const rotaAtiva = useLocation().pathname
  const [tamanhoDaTela, setTamanhoDaTela] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('redimensionar', () => setTamanhoDaTela(window.innerWidth))
  }, [])

  return (
    tamanhoDaTela <= 1024
      ? (rotaAtiva === "/" || rotaAtiva === "/novovideo")
        ? <DivNavagacaoEstilizado style={reverter ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
            <p>
              <img src={imagemAtiva} alt="" />
              {children}
            </p>
            <Link to={url}>
              <img src={imagem} alt="" />
            </Link>
          </DivNavagacaoEstilizado>
        : <DivNavagacaoEstilizado>
            <Link to={"/"}>
              <img src={iconeCasa} alt="" />
            </Link>
            <Link to={"/novovideo"}>
              <img src={iconeMais} alt="" />
            </Link>
          </DivNavagacaoEstilizado>
      : <DivNavagacaoEstilizado>
          <Link to="/">
            <Botao estaAtivo={rotaAtiva === "/" ? true : false}>HOME</Botao>
          </Link>
          <Link to="novovideo">
            <Botao estaAtivo={rotaAtiva === "/novovideo" ? true : false}>NOVO VÍDEO</Botao>
          </Link>
        </DivNavagacaoEstilizado>
  )
}

export default ItemNavegacao