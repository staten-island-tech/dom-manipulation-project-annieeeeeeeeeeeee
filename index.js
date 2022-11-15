const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.querySelector(".btn"),
  input: document.querySelectorAll(".textbox"),
  displaySection: document.getElementById("display"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let albumName = document.getElementById("title").value;
  console.log(albumName);

  let artistName = document.getElementById("artist").value;
  console.log(artistName);

  let img = document.getElementById("url").value;
  console.log(img);

  DOMSelectors.displaySection.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <img
      class="display-img"
      src=${img}"
    />
    <h2 class="display-artist">${artistName}</h2>
    <h3 class="display-album">${albumName}</h3>
    <button class="remove btn">Remove Album</button>
  </div> `
  );
});
