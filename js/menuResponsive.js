function myFunction() {
  let x = document.getElementByClassName("drop-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
