import { Link } from "react-router-dom"
import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import { useVideosContext } from "../../contexto/VideosContexto"

const BannerEstilizado = styled.div`
  display: none;
    @media screen and (min-width: 1024px){ 
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      width: 100%;
      height: 700px;
      margin: 20px 0;
      padding: 0 40px;
      background:linear-gradient(#0012338F,#0012338F),url(${(props) => props.$capa});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border: 3px solid ${(props) => props.$cor};
      cursor: pointer;
      div{
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      h3{
        font-size: 3rem;
        margin: 20px 0;
      }
      p{
        font-size: 1.125rem;
        font-weight: 300;
        color: #F5F5F5;
        text-align: justify;
      }
      img{
        width: 100%;
        max-width: 640px;
        align-self: center;
      }
    }
`

const BannerImagemEstilizado = styled.div`
  box-shadow: 0px 0px 17px 8px ${(props) => props.$cor};
`

const Banner = () => {
  const videos = useVideosContext().videos
  const categorias = useVideosContext().categorias

  if (videos.length === 0 || categorias.length === 0) {
    return null
  }

  const numeroAleatorio = Math.floor(Math.random() * (videos.length))
  const bannerVideo = videos[numeroAleatorio]
  const bannerVideoCategoria = categorias.filter((categoria) => categoria.tecnologia === bannerVideo.tecnologia)
  const corDaCategoria = bannerVideoCategoria[0].cor

  return (
    <Link to={`/${bannerVideo.id}`}>
      <BannerEstilizado $capa={bannerVideo.capa} $cor={corDaCategoria}>
        <div>
          <TituloCategoria cor={corDaCategoria}>
            {bannerVideo.tecnologia}
          </TituloCategoria>
          <h3>{bannerVideo.titulo}</h3>
          <p>{bannerVideo.descricao}</p>
        </div>
        <BannerImagemEstilizado $cor={corDaCategoria}>
          <img src={bannerVideo.capa} alt={bannerVideo.titulo}/>
        </BannerImagemEstilizado>
      </BannerEstilizado>
    </Link>
  )
}

export default Banner