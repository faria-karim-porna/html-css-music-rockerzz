document.getElementsByClassName("popular-album-slider")[0].style.transition =
  "1s";

function updatePopularAlbumSectionForward() {
  const forwardInterval = setInterval(() => {
    if (
      (parseInt(
        document.getElementsByClassName("popular-album-slider")[0].style.right,
        10
      ) || 0) !== -2100
    ) {
      const translateValue =
        (parseInt(
          document.getElementsByClassName("popular-album-slider")[0].style
            .right,
          10
        ) || 0) - 1050;
      document.getElementsByClassName(
        "popular-album-slider"
      )[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(forwardInterval);
      updatePopularAlbumSectionBackward();
    }
  }, 2000);
}

function updatePopularAlbumSectionBackward() {
  const backwardInterval = setInterval(() => {
    if (
      (parseInt(
        document.getElementsByClassName("popular-album-slider")[0].style.right,
        10
      ) || 0) !== 0
    ) {
      const translateValue =
        (parseInt(
          document.getElementsByClassName("popular-album-slider")[0].style
            .right,
          10
        ) || 0) + 1050;
      document.getElementsByClassName(
        "popular-album-slider"
      )[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(backwardInterval);
      updatePopularAlbumSectionForward();
    }
  }, 2000);
}

updatePopularAlbumSectionForward();
