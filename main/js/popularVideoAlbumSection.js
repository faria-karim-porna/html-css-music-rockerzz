document.getElementsByClassName("video-album-slider")[0].style.transition = "1s";

function updateVideoAlbumSectionForward() {
  const forwardInterval = setInterval(() => {
    if ((parseInt(document.getElementsByClassName("video-album-slider")[0].style.right, 10) || 0) !== -2100) {
      const translateValue = (parseInt(document.getElementsByClassName("video-album-slider")[0].style.right, 10) || 0) - 1050;
      document.getElementsByClassName("video-album-slider")[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(forwardInterval);
      updateVideoAlbumSectionBackward();
    }
  }, 2000);
}

function updateVideoAlbumSectionBackward() {
  const backwardInterval = setInterval(() => {
    if ((parseInt(document.getElementsByClassName("video-album-slider")[0].style.right, 10) || 0) !== 0) {
      const translateValue = (parseInt(document.getElementsByClassName("video-album-slider")[0].style.right, 10) || 0) + 1050;
      document.getElementsByClassName("video-album-slider")[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(backwardInterval);
      updateVideoAlbumSectionForward();
    }
  }, 2000);
}

updateVideoAlbumSectionForward();
