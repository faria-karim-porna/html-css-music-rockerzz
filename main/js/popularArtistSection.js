const initialXRight = document
  .getElementsByClassName("popular-artist-slider")[0]
  .getBoundingClientRect().right;

const initialXLeft = document
  .getElementsByClassName("popular-artist-slider")[0]
  .getBoundingClientRect().left;

function forwardButton() {
  const laterX = document
    .getElementsByClassName("popular-artist-slider")[0]
    .getBoundingClientRect().right;

  const translateValue = ((laterX - initialXRight) / 210 + 1) * 210;

  document.getElementsByClassName(
    "popular-artist-slider"
  )[0].style.transform = `translateX(${translateValue}px)`;
  document.getElementsByClassName("popular-artist-slider")[0].style.transition =
    "0.5s";
}

function backwardButton() {
  const laterX = document
    .getElementsByClassName("popular-artist-slider")[0]
    .getBoundingClientRect().left;

  const translateValue = ((initialXLeft - laterX) / 210 + 1) * 210;
  document.getElementsByClassName(
    "popular-artist-slider"
  )[0].style.transform = `translateX(-${translateValue}px)`;
  document.getElementsByClassName("popular-artist-slider")[0].style.transition =
    "0.5s";
}
