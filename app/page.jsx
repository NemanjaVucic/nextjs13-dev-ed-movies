import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const movies = await data.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.results.map(({ id, title, release_date, poster_path }) => (
          <Movie
            key={id}
            id={id}
            title={title}
            release_date={release_date}
            poster_path={poster_path}
          />
        ))}
      </div>
    </main>
  );
}
