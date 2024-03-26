const url = "http://www.omdbapi.com/?i=tt3896198&apikey=93dd9d60";

const apiKey = "93dd9d60";
const apiUrl = "http://www.omdbapi.com/";

// http://www.omdbapi.com/?t=moana&apikey=93dd9d60
// http://www.omdbapi.com/?t=babymama&apikey=93dd9d60
// http://www.omdbapi.com/?apikey=93dd9d60&t=field-of-dreams

// Function to fetch movie data by title
async function fetchMovieDataByTitle(title) {
  const url = `${apiUrl}?apikey=${apiKey}&t=${encodeURIComponent(title)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return null;
  }
}

// Example usage
const movieTitle = "Moana";
fetchMovieDataByTitle(movieTitle)
  .then((data) => {
    console.log("Move data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// const poster = document.createElement("img");
// poster.setAttribute("src", data.Poster);
// document.body.appendChild(poster);
