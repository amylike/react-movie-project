import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetails from "../components/MovieDetails";

function Details() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Details</h1>
      ) : (
        <div>
          <MovieDetails
            title={details.title}
            coverImage={details.medium_cover_image}
            rating={details.rating}
            year={details.year}
            genres={details.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Details;
