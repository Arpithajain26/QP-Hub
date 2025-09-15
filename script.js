const coords = { x: 0, y: 0 };
const circles = [];

for (let i = 0; i < 20; i++) {
  let div = document.createElement("div");
  div.className = "trail";
  document.body.appendChild(div);
  circles.push(div);
}

document.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateTrail() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach((circle, index) => {
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    // shrink circles as they go further in trail
    circle.style.transform = `translate(-50%, -50%) scale(${1 - index / 20})`;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.offsetLeft - x) * 0.3;
    y += (nextCircle.offsetTop - y) * 0.3;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();
