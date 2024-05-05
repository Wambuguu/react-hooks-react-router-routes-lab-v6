import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </main>
    </>
  );
}

export default Home;
