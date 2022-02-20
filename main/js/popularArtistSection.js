document.getElementsByClassName("popular-artist-slider")[0].style.transition = "0.5s";
function forwardButton() {
  if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== -1470) {
    const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) - 210;
    document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
  }
}

function backwardButton() {
  if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== 0) {
    const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) + 210;
    document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
  }
}

// function updateForward() {
//   const forwardInterval = setInterval(() => {
//     if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== -1470) {
//       const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) - 210;
//       document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
//     } else {
//       clearInterval(forwardInterval);
//       updateBackward();
//     }
//   }, 1000);
// }

// function updateBackward() {
//   const backwardInterval = setInterval(() => {
//     if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== 0) {
//       const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) + 210;
//       document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
//     } else {
//       clearInterval(backwardInterval);
//       updateForward();
//     }
//   }, 1000);
// }

// updateForward();
