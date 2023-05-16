const svg = document.getElementById("svg-canvas");

window.addEventListener("resize", resizeSvg);

function evenRGB() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  if (r % 2 !== 0) {
    r += 1;
  }
  if (g % 2 !== 0) {
    g += 1;
  }
  if (b % 2 !== 0) {
    b += 1;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

function oddRGB() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  if (r % 2 === 0) {
    r += 1;
  }
  if (g % 2 === 0) {
    g += 1;
  }
  if (b % 2 === 0) {
    b += 1;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

function drawCircles() {
  // Clear existing circles
  svg.innerHTML = "";

  let bbox = svg.getBoundingClientRect();
  let centerX = bbox.width / 2;
  let centerY = bbox.height / 2;

  let radius_1 = 0;
  let radius_2 = 0;

  for (let i = 10; i >= 1; i--) {
    if (i % 2 === 0) {
      radius_1 = 40 * i;
    } else if (i % 2 !== 0) {
      radius_2 = 40 * i;
    }
    drawCircle_1(centerX, centerY, radius_1);
    drawCircle_2(centerX, centerY, radius_2);
  }
}

function drawCircle_1(cx, cy, r) {
  let newCircle_1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  newCircle_1.setAttribute("cx", cx);
  newCircle_1.setAttribute("cy", cy);
  newCircle_1.setAttribute("r", r);
  newCircle_1.setAttribute("fill", evenRGB());
  svg.appendChild(newCircle_1);
}

function drawCircle_2(cx, cy, r) {
  let newCircle_2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  newCircle_2.setAttribute("cx", cx);
  newCircle_2.setAttribute("cy", cy);
  newCircle_2.setAttribute("r", r);
  newCircle_2.setAttribute("fill", oddRGB());
  svg.appendChild(newCircle_2);
}

function resizeSvg() {
  const aspectRatio = 3 / 4; // Desired aspect ratio
  const minViewportWidth = 810; // Minimum viewport width
  const maxViewportWidth = 2560; // Maximum viewport width

  const viewportWidth = Math.max(
    minViewportWidth,
    Math.min(maxViewportWidth, window.innerWidth)
  );
  const viewportHeight = viewportWidth / aspectRatio;

  svg.setAttribute("viewBox", `0 0 ${viewportWidth} ${viewportHeight}`);
  drawCircles();
}

resizeSvg();
