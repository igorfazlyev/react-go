import { useEffect, useState } from "react"
//import moviesList from "../data/movies"
import { Link } from "react-router-dom"

const Movies = ()=>{
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const requestOptions = {
            method: "GET",
            headers: headers,
        }
        const backednAddress = "https://bookish-spork-974xg5r4jv5h749v-8080.app.github.dev/movies"
        fetch(backednAddress, requestOptions)
            .then(resp=>resp.json())
            .then(data=>setMovies(data))
            .catch(err=>console.log(err))
        //setMovies(moviesList)
    },[])
    return(
        <>
        <div>
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>(
                        <tr key={movie.id}>
                            <td>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </td>
                            <td>
                                {movie.release_date}
                            </td>
                            <td>
                                {movie.mpaa_rating}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Movies