import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const HomePage = async ({ searchParams }) => {
  const search = searchParams.search || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      search === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  let results = data.results;

  return (
    <main className="">
      <Results results={results} />
    </main>
  );
};

export default HomePage;
