const allBtns = document.querySelectorAll(".btn");

allBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    button.classList.add("clicked");
  });
});
