//TO DO
// - Make dynamic
// - Figure out how to access data. from within 'html' variable

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=93dd9d60";

const apiKey = "93dd9d60";
const apiUrl = "http://www.omdbapi.com/";
const card = document.querySelector(".card");

// http://www.omdbapi.com/?t=moana&apikey=93dd9d60
// http://www.omdbapi.com/?t=babymama&apikey=93dd9d60
// http://www.omdbapi.com/?apikey=93dd9d60&t=moana

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
const movieTitle = "Homeward Bound";

fetchMovieDataByTitle(movieTitle)
  .then((data) => {
    const html = `

<main class="card">
<!-- header section -->
<div class="header">
  <hgroup class="header__title">
    <h1 class="title">${data.Title}</h1>
    <p class="genre">${data.Genre}</p>
  </hgroup>
  <p class="ratings"><span>${data.Ratings[0].Value}</span></p>
</div>
<!-- info section -->
<div class="info__container">
  <div class="poster__container">
    <img
      src="${data.Poster}"
      alt="movie poster"
      class="poster"
    />
  </div>
  <div class="info__text__container">
    <h2 class="info__text__title">About the movie</h2>
    <p class="info__plot">
      ${data.Plot}
    </p>
    <div class="info__grid">
      <div class="info__grid-actors">
        <h3>Actors</h3>
        <ul class="actors__list">
          <li class="actor">Auli'i Cravalho</li>
          <li class="actor">Dwayne Johnson</li>
          <li class="actor">Rachel House</li>
        </ul>
      </div>
      <div class="info__grid-director">
        <h3>Directors</h3>
        <ul class="director__list">
          <li class="director">Ron Clements</li>
          <li class="director">John Musker</li>
          <li class="director">Don Hall</li>
        </ul>
      </div>
      <div class="info__grid-screenwriter">
        <h3>Screenwriters</h3>
        <ul class="screenwriter__list">
          <li class="screenwriter">Jared Bush</li>
          <li class="screenwriter">Ron Clements</li>
          <li class="screenwriter">John Musker</li>
        </ul>
      </div>
      <div class="info__grid-released">
        <h3>Released in <span>2016</span></h3>
      </div>
    </div>
  </div>
</div>
<!-- cta section -->
<div class="cta">
  <p class="price">$19.00</p>
  <button class="buy">buy</button>
</div>
</main>



`;
    console.log("Movie data:", data);
    const newHTML = document.createElement("main");
    newHTML.innerHTML = html;
    document.body.appendChild(newHTML);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
