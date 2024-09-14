import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const videosApi = 'https://my-json-server.typicode.com/ana-cassia-invernizzi/aluraflix-api/videos'
const categoriasApi = 'https://my-json-server.typicode.com/ana-cassia-invernizzi/aluraflix-api/categorias'
export const VideosContext = createContext()
VideosContext.displayName = 'Videos'

export default function VideosProvider({ children }) {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [videoSelecionado, setVideoSelecionado] = useState(null)

  useEffect(() => {
    axios.get(videosApi)
      .then(resposta => {
        setVideos(resposta.data)
      })
  }, [])

  useEffect(() => {
    axios.get(categoriasApi)
      .then(resposta => {
        setCategorias(resposta.data)
      })
  }, [])

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        categorias,
        setCategorias,
        videoSelecionado,
        setVideoSelecionado
      }}>
      {children}
    </VideosContext.Provider>
  )
}

export function useVideosContext() {
  const { videos, setVideos } = useContext(VideosContext)
  const { categorias } = useContext(VideosContext)
  const { videoSelecionado, setVideoSelecionado } = useContext(VideosContext)

  function editarCard(video) {
    video ? window.scrollTo(0,350) : ""
    setVideoSelecionado(video)
  }

  function adicionarVideo(video) {
    axios
      .post(videosApi, {
        "titulo": video.titulo,
        "capa": video.capa,
        "link": video.link,
        "tecnologia": video.tecnologia,
        "descricao": video.descricao
      })
      .then((resposta) => {
        setVideos([...videos, resposta.data])
        alert("Vídeo adicionado!")
      })
      .catch(() => alert("Não foi possível adicionar o vídeo!"))
  }

  function atualizarVideo(video) {
    axios
      .put(`${videosApi}/${video.id}`, {
        "titulo": video.titulo,
        "capa": video.capa,
        "link": video.link,
        "tecnologia": video.tecnologia,
        "descricao": video.descricao
      })
      .then(() => {
        setVideos(videos.map(esteVideo => esteVideo.id === video.id ? video : esteVideo))
        alert("Vídeo editado!")
      })
      .catch(() => alert("Não foi possível editar o vídeo!"))
  }

  function deletarVideo(video) {
    axios
      .delete(`${videosApi}/${video.id}`)
      .then(() => {
        setVideos(videos.filter((esteVideo) => esteVideo.id !== video.id))
      })
      .catch(() => alert("Não foi possível deletar o vídeo!"))
  }

  return {
    videos,
    categorias,
    videoSelecionado,
    editarCard,
    adicionarVideo,
    atualizarVideo,
    deletarVideo
  }
}