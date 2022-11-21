const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.querySelector(".btn"),
  input: document.querySelectorAll(".textbox"),
  displaySection: document.getElementById("display"),
  album: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  //removebtn: document.querySelectorAll(".remove btn"),
};

function clearFields() {
  DOMSelectors.album.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}

/*function removeAlbum(target) {
  if (target.className === "remove btn") {
    target.parentElement.remove();
  }
}
*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let albumName = DOMSelectors.album.value;
  console.log(albumName);

  let artistName = DOMSelectors.artist.value;
  console.log(artistName);

  let img = DOMSelectors.url.value;
  console.log(img);

  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
    <img
      class="display-img"
      src=${img}
    />
    <h2 class="display-album">${albumName}</h2>
    <h3 class="display-artist">${artistName}</h3>
    
    <button class="remove btn">Remove Album</button>
  </div> `
  );

  clearFields();
});

function removeAlbumParent() {
  let displayCard = document.querySelectorAll(".display-card");
  console.log(displayCard);
  let removeBtn = document.querySelectorAll(".remove-btn");

  removeAlbum();
  {
    displayCard.remove;
  }
  removeBtn.forEach();
}

DOMSelectors.displaySection.addEventListener("click", function (event) {
  removeAlbum(event.target);
  event.preventDefault();
});
