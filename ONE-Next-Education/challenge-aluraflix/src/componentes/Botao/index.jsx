import styled from "styled-components"

const BotaoEstilizado = styled.button`
  width: 180px;
  height: 54px;
  background-color: transparent;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  color: var(--branco);
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  &.ativo{
    background-color: #000000e5;
    border: 2px solid var(--azul);
    box-shadow: 0px 0px 12px 4px var(--azul) inset;
    color: var(--azul);
  }
`

const Botao = ({ children, estaAtivo }) => {
  return (
    <BotaoEstilizado className={estaAtivo ? "ativo" : ""}>
      {children}
    </BotaoEstilizado>
  )
}

export default Botao