document.getElementsByClassName("audio-album-slider")[0].style.transition =
  "1s";

function updateAudioAlbumSectionForward() {
  const forwardInterval = setInterval(() => {
    if (
      (parseInt(
        document.getElementsByClassName("audio-album-slider")[0].style.right,
        10
      ) || 0) !== -2100
    ) {
      const translateValue =
        (parseInt(
          document.getElementsByClassName("audio-album-slider")[0].style
            .right,
          10
        ) || 0) - 1050;
      document.getElementsByClassName(
        "audio-album-slider"
      )[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(forwardInterval);
      updateAudioAlbumSectionBackward();
    }
  }, 2000);
}

function updateAudioAlbumSectionBackward() {
  const backwardInterval = setInterval(() => {
    if (
      (parseInt(
        document.getElementsByClassName("audio-album-slider")[0].style.right,
        10
      ) || 0) !== 0
    ) {
      const translateValue =
        (parseInt(
          document.getElementsByClassName("audio-album-slider")[0].style
            .right,
          10
        ) || 0) + 1050;
      document.getElementsByClassName(
        "audio-album-slider"
      )[0].style.right = `${translateValue}px`;
    } else {
      clearInterval(backwardInterval);
      updateAudioAlbumSectionForward();
    }
  }, 2000);
}

updateAudioAlbumSectionForward();
