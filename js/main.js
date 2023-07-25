const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.getElementById("ccright").innerHTML =
  "&copy; " + new Date().getFullYear() + " Fuja" + " - All Rights Reserved";
