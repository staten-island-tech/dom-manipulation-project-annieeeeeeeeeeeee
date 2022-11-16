const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.querySelector(".btn"),
  input: document.querySelectorAll(".textbox"),
  displaySection: document.getElementById("display"),
};

console.log(DOMSelectors.removeButton);

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("url").value = "";
}

function deleteAlbum(target) {
  if (target.className === "remove btn") {
    target.parentElement.remove();
  }
}

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
      src=${img}
    />
    <h3 class="display-album">${albumName}</h3>
    <h2 class="display-artist">${artistName}</h2>
    
    <button class="remove btn">Remove Album</button>
  </div> `
  );

  clearFields();
});

DOMSelectors.displaySection.addEventListener("click", function (event) {
  deleteAlbum(event.target);
  event.preventDefault();
});
