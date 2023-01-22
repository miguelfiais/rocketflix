import Poster from "../../assets/Poster.png"
import { BoxNoMovies } from "./styles"

const NoMovies = () => {
  return (
    <BoxNoMovies>
        <img src={Poster} alt="sem-filmes" />
        <p>Ops, hoje não é dia de assistir filme. Bora codar!🚀</p>
    </BoxNoMovies>
  )
}

export default NoMovies