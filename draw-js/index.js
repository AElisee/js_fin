const canvas = document.getElementById("art");
console.log(canvas);
const ctx = canvas.getContext("2d");

// récupère la postion de la souris (2)
function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

//lorsqu'on déplace la souris (3)
function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "darkblue";
  ctx.lineWidth = 6;
}

//lorsqu'on maintient la souris (1)
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);

  // quand on relache la souris
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
