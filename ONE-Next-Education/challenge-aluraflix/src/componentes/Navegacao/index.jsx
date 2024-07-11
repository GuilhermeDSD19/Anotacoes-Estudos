import { useLocation } from "react-router-dom"
import styled from "styled-components"
import ItemNavegacao from "../ItemNavegacao"
import iconeCasaAzul from "../../../public/assets/casa-azul.svg"
import iconeMaisAzul from "../../../public/assets/mais-azul.svg"
import iconeCasa from "../../../public/assets/casa.svg"
import iconeMais from "../../../public/assets/mais.svg"

const NavegacaoEstilizada = styled.nav`
  background-color: var(--preto);
`

const Navegacao = () => {
  const paginaAtiva = useLocation().pathname
 
  return (
    <NavegacaoEstilizada>
      {paginaAtiva === "/"
        ? <ItemNavegacao
            url="novovideo"
            imagem={iconeMais}
            imagemAtiva={iconeCasaAzul}
            reverter={false}
          >
            HOME
        </ItemNavegacao>
        : <ItemNavegacao
            url="/"
            imagem={iconeCasa}
            imagemAtiva={iconeMaisAzul}
            reverter={true}
          >
            NOVO VÍDEO
        </ItemNavegacao>}
    </NavegacaoEstilizada>
  )
}

export default Navegacao