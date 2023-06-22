import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../Layouts/Container";

function getPosterURL(url) {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${url}`;
}

export default function Details() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d9d88fbb26850c61d46a7801aaaedcc1`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params.id]);

  return (
    <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500">
      <Container>
        {movie ? (
          <div className="flex gap-10 py-7">
            <img
              className="w-[300px] h-[450px] rounded-md"
              src={getPosterURL(movie.poster_path)}
              alt={movie.original_title}
            />
            <div className="text-white py-2 flex-1">
              <h2 className=" font-bold text-4xl">
                {movie.original_title}
                <span className="font-light">{`  (${movie.release_date.substring(
                  0,
                  4
                )})`}</span>
              </h2>

              <p>{`${movie.release_date}      ${movie.genres.map(
                (genre) => " " + genre.name
              )} `}</p>
              <h3 className="pt-32 italic">{movie.tagline}</h3>
              <h3 className="pt-3 pb-3 text-xl font-semibold">Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </Container>
    </div>
  );
}
