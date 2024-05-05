import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({}); 
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${movieId}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchData();
  }, [movieId]);

  const genres = movie.genres?.map(
    (
      genre 
    ) => <span key={genre}>{genre}</span>
  );

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>{genres}</p>
      </main>
    </>
  );
}

export default Movie;
