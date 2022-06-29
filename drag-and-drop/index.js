let item;

// on attrape un élément qu'on stock dans item
document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  // le preventDefault() ici nous permet de deposer notre élément là où on veut, il nous indique en effet la bîte dans laquelle nous voulons déposer l'élément
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
    item = null;
  }
});
