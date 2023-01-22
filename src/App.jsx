import { useState, useEffect } from "react";
import { FaRandom } from "react-icons/fa";
import Movie from "./components/Movie";
import logo from "./assets/logo.png"
import * as C from "./styles";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function App() {
  
  const [movie, setMovie] = useState()

  const getMovie = async() => {
    const data = await fetch(`${moviesURL}${parseInt(Math.random() * 996)}?${apiKey}&language=pt-BR`).then(response => response.json())
    console.log(data)
    setMovie(data)
  }

  return (
    <C.Container>
      <img src={logo} alt="logo" />
      <C.Title>Não sabe o que assistir?</C.Title>
      {
        movie && (
          <Movie data={movie}/>
        )
      }
      <C.Button onClick={getMovie}><FaRandom /> Encontrar filme</C.Button>
      <C.Text>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</C.Text>
    </C.Container>
  )
}

export default App
