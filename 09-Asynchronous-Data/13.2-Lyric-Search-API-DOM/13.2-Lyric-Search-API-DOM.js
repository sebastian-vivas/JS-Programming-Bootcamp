alert("hola");

const form = document.querySelector("#form");
const artistInput = document.querySelector("#search-artist-id");
const titleInput = document.querySelector("#search-title-id");
const messageDiv = document.querySelector("#message-div");
const inputArtistErrorSpan = document.querySelector("#input-artist-error-span");
const inputTitleErrorSpan = document.querySelector("#input-artist-rror-span");
const lyricsErrorSpan = document.querySelector("#lyrics-error-span");
const showLyricsH2 = document.querySelector("#show-lyrics-h2");
const showLyrics = document.querySelector("#show-lyrics");

artistInput.addEventListener("input", function (event) {
  if (event.target.value === "") {
    artistInput.classList.add("input-error");
    inputArtistErrorSpan.innerHTML = "Artist input cannot be empty";
    inputArtistErrorSpan.classList.add(".error-spa");
  } else {
    artistInput.classList.remove("input-error");
    inputArtistErrorSpan.innerHTML = "";
    inputArtistErrorSpan.classList.remove("error-spa");
  }
});

titleInput.addEventListener("input", function (event) {
  if (event.target.value === "") {
    titleInput.classList.add("input-error");
    inputTitleErrorSpan.innerHTML = "title input cannot be empty";
    inputTitleErrorSpan.classList.add(".error-spa");
  } else {
    titleInput.classList.remove("input-error");
    inputTitleErrorSpan.innerHTML = "";
    inputTitleErrorSpan.classList.remove("error-spa");
  }
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (artistInput.value === "" || titleInput.value === "") {
    messageDiv.innerHTML = "All fields are required!!!";
    messageDiv.classList.add("error-message");

    artistInput.classList.add("input-error");
    titleInput.classList.add("input-error");
  } else {
    try {
      const payload = await fetch(
        `https://api.lyrics.ovh/v1/${artistInput.value}/${titleInput.value}`
      );
      const data = await payload.json();

      if (payload.status === 404 && payload.statusText === "Not Found") {
        throw new Error(data.error);
      } else {
        lyricsErrorSpan.innerHTML = ``;
        showLyricsH2.classList.remove("show-lyrics-h2");
        showLyrics.textContent = data.lyrics;
      }
    } catch (error) {
      showLyricsH2.classList.add("show-lyrics-h2");
      showLyrics.textContent = ``;
      lyricsErrorSpan.innerHTML = `${error} - please try again`;
    }
  }
});
