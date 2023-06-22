import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const media = useSelector((state) => state.media.value);

  useEffect(() => {
    let url = "/movie/popular";
    const fetchMovies = async () => {
      if (media === "movies") {
        url = "/movie/popular";
      }
      if (media === "In Theatres") {
        url = "/movie/upcoming";
      }
      const { data } = await tmdb.get(url);

      setMovies(data.results);
    };
    fetchMovies();
  }, [media]);
  return (
    <div className="flex pb-5 px-5 overflow-x-auto">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
}
