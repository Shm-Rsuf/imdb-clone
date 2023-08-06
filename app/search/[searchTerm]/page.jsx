const SearchPage = async ({ params }) => {
  // const id = params.searchTerm;
  // console.log("searchId: ", id);
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Error featching data");
  }

  const data = await response.json();
  const results = data.results;

  return <div>helo</div>;
};

export default SearchPage;
