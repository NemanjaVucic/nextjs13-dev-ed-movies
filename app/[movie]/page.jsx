import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const movies = await data.json();

  return movies.results.map(({ id }) => ({
    movie: id.toString(),
  }));
}

export default async function MovieDetail({ params }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  );

  const movieDetails = await data.json();

  return (
    <div>
      <h2 className="text-2xl">{movieDetails.original_title}</h2>
      <h2 className="text-lg">{movieDetails.release_date}</h2>
      <h2>{movieDetails.runtime}</h2>
      <h2 className="bg-green-600 inline-block p-2 my-2 text-white rounded-md">
        {movieDetails.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imgPath + movieDetails.backdrop_path}
        width={1000}
        height={1000}
        alt={movieDetails.imdb_id}
        priority
      />
      <p>{movieDetails.overview}</p>
    </div>
  );
}
