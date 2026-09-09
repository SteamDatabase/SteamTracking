const MAX_STEP_MS = 100;
const TRAVEL_TIME_SEC = 10;
const START_POSITION_PADDING = 0.2;
const COLORS = [
  "#FFFFFF",
  "#FFFF00",
  "#00FFFF",
  "#00FF00",
  "#FF00FF",
  "#FF0000",
  "#0000FF",
];
let g_state = null;
function Init() {
  let logo = document.getElementById("logo");
  g_state = {
    logo,
    lastFrame: undefined,
    _: 0,
    _: 0,
    velocityX: 0,
    velocityY: 0,
    logoWidth: 0,
    logoHeight: 0,
    screenWidth: 0,
    screenHeight: 0,
    currentColor: 0,
  };
  window.addEventListener("resize", ResolutionChanged);
  ResolutionChanged();
  let paddingX = g_state.screenWidth * START_POSITION_PADDING;
  let paddingY = g_state.screenHeight * START_POSITION_PADDING;
  g_state._ =
    RandomInt(g_state.screenWidth - g_state.logoWidth - paddingX * 2) +
    paddingX;
  g_state._ =
    RandomInt(g_state.screenHeight - g_state.logoHeight - paddingY * 2) +
    paddingY;
  g_state.velocityX =
    Math.random() < 0.5 ? g_state.velocityX : -g_state.velocityX;
  g_state.velocityY =
    Math.random() < 0.5 ? g_state.velocityY : -g_state.velocityY;
  g_state.currentColor = RandomInt(COLORS.length);
  UpdateLogo();
  requestAnimationFrame(RunFrame);
}
function ResolutionChanged() {
  const rctLogo = g_state.logo.getBoundingClientRect();
  const width = window.innerWidth - rctLogo.width;
  const height = window.innerHeight - rctLogo.height;
  const speed = Math.min(width, height) / TRAVEL_TIME_SEC;
  g_state.velocityX = g_state.velocityX >= 0 ? speed : -speed;
  g_state.velocityY = g_state.velocityY >= 0 ? speed : -speed;
  g_state.logoWidth = rctLogo.width;
  g_state.logoHeight = rctLogo.height;
  g_state.screenWidth = window.innerWidth;
  g_state.screenHeight = window.innerHeight;
}
function RunFrame(currentTime) {
  requestAnimationFrame(RunFrame);
  if (g_state.lastFrame === undefined) g_state.lastFrame = currentTime;
  const elapsedTime = currentTime - g_state.lastFrame;
  g_state.lastFrame = currentTime;
  const step = Math.min(elapsedTime, MAX_STEP_MS) / 1000;
  const rightEdge = g_state.screenWidth - g_state.logoWidth;
  const bottomEdge = g_state.screenHeight - g_state.logoHeight;
  g_state._ += g_state.velocityX * step;
  g_state._ += g_state.velocityY * step;
  let changeColor = false;
  if (g_state._ <= 0) {
    g_state._ = 0 - g_state._;
    g_state.velocityX *= -1;
    changeColor = true;
  } else if (g_state._ >= rightEdge) {
    g_state._ = rightEdge - (g_state._ - rightEdge);
    g_state.velocityX *= -1;
    changeColor = true;
  }
  if (g_state._ <= 0) {
    g_state._ = 0 - g_state._;
    g_state.velocityY *= -1;
    changeColor = true;
  } else if (g_state._ >= bottomEdge) {
    g_state._ = bottomEdge - (g_state._ - bottomEdge);
    g_state.velocityY *= -1;
    changeColor = true;
  }
  if (changeColor)
    g_state.currentColor = (g_state.currentColor + 1) % COLORS.length;
  UpdateLogo();
}
function UpdateLogo() {
  g_state.logo.style.transform = `translate3d( ${g_state._}px, ${g_state._}px, 0 )`;
  g_state.logo.style.color = COLORS[g_state.currentColor];
}
function RandomInt(max) {
  return Math.floor(Math.random() * max);
}
Init();
