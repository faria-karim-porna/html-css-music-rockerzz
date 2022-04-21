const device = window.matchMedia("(max-width: 575.98px)");

if (device.matches) {
  document.getElementsByClassName("popular-album-slider")[1].style.transition =
    "1s";

  function updatePopularAlbumSectionForward() {
    const forwardInterval = setInterval(() => {
      if (
        (parseInt(
          document.getElementsByClassName("popular-album-slider")[1].style
            .right,
          10
        ) || 0) !== -600
      ) {
        const translateValue =
          (parseInt(
            document.getElementsByClassName("popular-album-slider")[1].style
              .right,
            10
          ) || 0) - 75;
        document.getElementsByClassName(
          "popular-album-slider"
        )[1].style.right = `${translateValue}vw`;
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
          document.getElementsByClassName("popular-album-slider")[1].style
            .right,
          10
        ) || 0) !== 0
      ) {
        const translateValue =
          (parseInt(
            document.getElementsByClassName("popular-album-slider")[1].style
              .right,
            10
          ) || 0) + 75;
        document.getElementsByClassName(
          "popular-album-slider"
        )[1].style.right = `${translateValue}vw`;
      } else {
        clearInterval(backwardInterval);
        updatePopularAlbumSectionForward();
      }
    }, 2000);
  }

  updatePopularAlbumSectionForward();
} else {
  document.getElementsByClassName("popular-album-slider")[0].style.transition =
    "1s";

  function updatePopularAlbumSectionForward() {
    const forwardInterval = setInterval(() => {
      if (
        (parseInt(
          document.getElementsByClassName("popular-album-slider")[0].style
            .right,
          10
        ) || 0) !== -150
      ) {
        const translateValue =
          (parseInt(
            document.getElementsByClassName("popular-album-slider")[0].style
              .right,
            10
          ) || 0) - 75;
        document.getElementsByClassName(
          "popular-album-slider"
        )[0].style.right = `${translateValue}vw`;
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
          document.getElementsByClassName("popular-album-slider")[0].style
            .right,
          10
        ) || 0) !== 0
      ) {
        const translateValue =
          (parseInt(
            document.getElementsByClassName("popular-album-slider")[0].style
              .right,
            10
          ) || 0) + 75;
        document.getElementsByClassName(
          "popular-album-slider"
        )[0].style.right = `${translateValue}vw`;
      } else {
        clearInterval(backwardInterval);
        updatePopularAlbumSectionForward();
      }
    }, 2000);
  }

  updatePopularAlbumSectionForward();
}
