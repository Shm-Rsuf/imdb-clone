import Results from "@/components/Results";

const SearchPage = async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Error featching data");
  }

  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h2 className="text-2xl pt-10">No results found</h2>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
