import InputFormulario from "./InputFormulario"
import SelectFormulario from "./SelectFormulario"
import TextAreaFormulario from "./TextAreaFormulario"
import { useVideosContext } from "../../contexto/VideosContexto"
import styled from "styled-components"
import { useEffect, useState } from "react"

const FormularioEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 575px;
  margin: 0 auto;
`

const ContainerBotaoEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 525px;
  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
  }
`

const FormularioBotaoEstilizado = styled.button`
  width: 180px;
  height: 54px;
  background-color: transparent;
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--branco);
  border: 3px solid var(--azul);
  border-radius: 15px;
  cursor: pointer;
  &.limpar {
    border: 3px solid var(--branco)
  }
`

const Formulario = ({ metodo, video }) => {
  const videoContexto = useVideosContext()
  const [videoTitulo, setVideoTitulo] = useState("")
  const [videoTecnologia, setVideoTecnologia] = useState("")
  const [videoCapa, setVideoCapa] = useState("")
  const [videoLink, setVideoLink] = useState("")
  const [videoDescricao, setVideoDescricao] = useState("")

  useEffect(() => {
    if (video) {
      setVideoTitulo(video.titulo)
      setVideoTecnologia(video.tecnologia)
      setVideoCapa(video.capa)
      setVideoLink(video.link)
      setVideoDescricao(video.descricao)
    }
  }, ([]))

  function formularioEnvio(evento) {
    evento.preventDefault()
    videoContexto.editarCard(null)
    const novoVideo = {
      "titulo": videoTitulo,
      "capa": videoCapa,
      "link": videoLink,
      "tecnologia": videoTecnologia,
      "descricao": videoDescricao
    }

    if (video) {
      novoVideo.id = video.id
      videoContexto.atualizarVideo(novoVideo)
    } else {
      videoContexto.adicionarVideo(novoVideo)
    }

    limparInputs()
  }

  function limparInputs() {
    setVideoTitulo("")
    setVideoCapa("")
    setVideoTecnologia("")
    setVideoLink("")
    setVideoDescricao("")
  }

  return (
    <FormularioEstilizado onSubmit={(evento => formularioEnvio(evento))}>
      <InputFormulario
        cor={metodo ? "#6bd1ff" : "#696969"}
        label="Título"
        id="titulo"
        type="text"
        value={videoTitulo ? videoTitulo : ""}
        placeholder="Digite o título do vídeo"
        lidarComMudança={(value) => setVideoTitulo(value)}
      />
      <SelectFormulario
        cor={metodo ? "#6bd1ff" : "#696969"}
        label="Tecnologia"
        id="tecnologia"
        categorias={videoContexto.categorias}
        value={videoTecnologia ? videoTecnologia : ""}
        lidarComMudança={(value) => setVideoTecnologia(value)}
      />
      <InputFormulario
        cor={metodo ? "#6bd1ff" : "#696969"}
        label="Capa"
        id="capa"
        type="url"
        value={videoCapa ? videoCapa : ""}
        placeholder="Digite o link da capa do vídeo"
        lidarComMudança={(value) => setVideoCapa(value)}
      />
      <InputFormulario
        cor={metodo ? "#6bd1ff" : "#696969"}
        label="Link"
        id="link"
        type="url"
        value={videoLink ? videoLink : ""}
        placeholder="Digite o link do vídeo"
        lidarComMudança={(value) => setVideoLink(value)}
      />
      <TextAreaFormulario
        cor={metodo ? "#6bd1ff" : "#696969"}
        label="Descrição"
        id="descricao"
        value={videoDescricao ? videoDescricao : ""}
        placeholder="Digite a descrição do vídeo"
        lidarComMudança={(value) => setVideoDescricao(value)}
      />
      <ContainerBotaoEstilizado>
        <FormularioBotaoEstilizado type="submit">
          Gravar
        </FormularioBotaoEstilizado>
        <FormularioBotaoEstilizado className="limpar" type="reset" onClick={() => limparInputs()}>
          Limpar
        </FormularioBotaoEstilizado>
      </ContainerBotaoEstilizado>
    </FormularioEstilizado> 
  )
}

export default Formulario