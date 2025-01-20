import PropTypes from "prop-types";

function MovieDetails({ title, coverImage, rating, year, genres }) {
  return (
    <div>
      <h1>Details</h1>
      <h2>{title}</h2>
      <img src={coverImage} alt={title} />
      <div>Ratings: {rating}</div>
      <div>Release: {year}</div>
      <div>Genres:</div>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetails;
