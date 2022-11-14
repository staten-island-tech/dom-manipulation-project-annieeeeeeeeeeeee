console.log("connected");

const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.querySelector(".btn"),
  heading: document.getElementById("heading"),

  //paragraph: document.getElementById("#text"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});

function display() {
  DOMSelectors.
}
const albumName = document.getElementById("title").value;
const artistName = document.getElementById("artist").value;
const img = document.getElementById("url").value;

console.log(albumName);
