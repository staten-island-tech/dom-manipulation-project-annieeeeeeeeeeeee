const DOMSelectors = {
  input: document.querySelectorAll(".form"),
  button: document.querySelectorAll(".btn"),
  background: document.getElementById("#background"),
};

console.log(DOMSelectors);

function test(background) {
  background.style.backgroundColor = "red";
}

DOMSelectors.button.addEventListener("click", function () {
  test(DOMSelectors.background);
});
