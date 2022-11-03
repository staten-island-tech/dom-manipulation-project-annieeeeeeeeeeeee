console.log("connected");

const DOMSelectors = {
  input: document.querySelector(".form"),
  button: document.querySelector(".btn"),
  box: document.getElementById("#box"),
  heading: document.getElementById("#heading"),
  paragraph: document.getElementById("#text"),
};
function test(changeTest) {
  changeTest.innerHTML = "HEY";
}

DOMSelectors.button.addEventListener("click", function () {
  test(DOMSelectors.paragraph);
});
