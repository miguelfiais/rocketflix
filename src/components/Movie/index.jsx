import NoMovies from "../NoMovies"
import * as M from "./styles"

const imageUrl = import.meta.env.VITE_IMG

const Movie = ({data}) => {
  return (
    <M.BoxMovie>
      {
          data.status_code === 34 || data.adult === true ? (
            <NoMovies />
          ) : <> 
                <img src={imageUrl + data.poster_path} alt="Poster indisponivel" />
                <M.MovieContent>
                  <h3>{data.title}</h3>
                  <p>{data.overview}</p>
                  <p>{data.status_code}</p>
                </M.MovieContent>
              </>
        }
    </M.BoxMovie>
  )
}

export default Movie