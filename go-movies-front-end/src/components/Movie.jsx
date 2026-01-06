import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moviesList from "../data/movies"

const Movie = ()=>{
    const [movie, setMovie] = useState({})
    let {id} = useParams()

    useEffect(()=>{
        let foundMovie = moviesList.find(movie=>movie.id===parseInt(id))
        if (foundMovie){
            setMovie(foundMovie)
        }
    },[])
    return(
        <>
        <div>
            <h2>{movie.title}</h2>
            <small>
                <em>
                    Release date: {movie.release_date}<br/>
                    Runtime: {movie.runtime}
                </em>
            </small>
            <hr />
            
            <p>{movie.description}</p>
        </div>
        </>
    )
}

export default Movie