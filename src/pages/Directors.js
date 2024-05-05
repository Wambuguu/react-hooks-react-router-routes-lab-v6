import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors");
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error("Error fetching directors:", error);
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
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading directors...</p>
        )}
      </main>
    </>
  );
}

export default Directors;
