import Image from "next/image";

const MoviePage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Fetch to failed movie");
  }
  const movie = await res.json();
  console.log("movie=", movie);

  return (
    <section className="w-full mt-10">
      <div className="wrapper flex justify-center items-center flex-col md:flex-row gap-5">
        <div className="w-full h-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="movie poster"
            width={350}
            height={500}
            placeholder="blur"
            blurDataURL="/spin.svg"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full space-y-1">
          <h3 className="font-semibold text-xl">Title: {movie.title}</h3>
          <p className="text-lg">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>

          <p className="text-lg">
            <span className="font-semibold mr-1">Release Date:</span>
            {movie.release_date || movie.first_air_date}
          </p>

          <p className="text-lg">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
