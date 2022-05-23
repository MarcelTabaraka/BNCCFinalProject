const movieInput = document.querySelector(".movie-input");
const movieButton = document.querySelector(".movie-button");
const movieList = document.querySelector(".movie-list");

movieButton.addEventListener("click", addMovie);
movieList.addEventListener("click", ratingMovie);

function addMovie(e){
    e.preventDefault();

    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const newMovie = document.createElement("li");
    newMovie.innerText = movieInput.value;
    newMovie.classList.add("movie-item");
    movieDiv.appendChild(newMovie);
    movieInput.value = "";

    const awesomeButton = document.createElement("button");
    awesomeButton.innerHTML = `<i class="fa-solid fa-fire"></i>`;
    awesomeButton.classList.add("awesome-btn");
    movieDiv.appendChild(awesomeButton);

    const thumbsUpButton = document.createElement("button");
    thumbsUpButton.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
    thumbsUpButton.classList.add("thumbsUp-btn");
    movieDiv.appendChild(thumbsUpButton);

    const thumbsDownButton = document.createElement("button");
    thumbsDownButton.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;
    thumbsDownButton.classList.add("thumbsDown-btn");
    movieDiv.appendChild(thumbsDownButton);

    movieList.appendChild(movieDiv);
}

function ratingMovie(e){
    const item = e.target;
    if(item.classList[0] === "awesome-btn"){
        const movie = item.parentElement;
        movie.classList.remove("thumbUp");
        movie.classList.remove("thumbDown");
        movie.classList.toggle("awesome");
    }
    if(item.classList[0] === "thumbsUp-btn"){
        const movie = item.parentElement;
        movie.classList.remove("awesome");
        movie.classList.remove("thumbDown");
        movie.classList.toggle("thumbUp");
    }
    if(item.classList[0] === "thumbsDown-btn"){
        const movie = item.parentElement;
        movie.classList.remove("thumbUp");
        movie.classList.remove("awesome");
        movie.classList.toggle("thumbDown");
    }
}