let isPlayingVideo = false;
// Get the video element tag
const video = document.querySelector("video");
video.src =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
video.poster = "images/1.jpg";
const mobile = window.matchMedia("(max-width: 575.98px)");
function playVideo() {
  isPlayingVideo = true;

  //  Remove Pause Icon and Add Play Icon
  const icon = document.getElementById("play-pause-icon");
  icon.classList.remove("fa-play-circle");
  icon.classList.add("fa-pause-circle");
  video.volume = 1;

  video.play();
}

function pauseVideo() {
  isPlayingVideo = false;

  //  Remove Play Icon and Add Pause Icon
  const icon = document.getElementById("play-pause-icon");
  icon.classList.remove("fa-pause-circle");
  icon.classList.add("fa-play-circle");

  video.pause();
}

function playPauseVideo() {
  isPlayingVideo ? pauseVideo() : playVideo();
}

function changeVideoDuration() {
  //change video time based on slider
  let durationSlider = document.querySelector("#duration-slider");
  const sliderPosition = video.duration * (durationSlider.value / 100);
  video.currentTime = sliderPosition;
  const sliderPoint = video.currentTime * (100 / video.duration);
  // change slider fill
  durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPoint}%, white ${
    sliderPoint + 0.1
  }%)`;
}

function changeVideoVolume() {
  if (mobile.matches) {
    //mobile version
    //change audio volume based on slider
    let volumeSliderMobile = document.querySelector("#volume-slider");
    const volumeSliderPositionMobile = volumeSliderMobile.value / 100;
    video.volume = volumeSliderPositionMobile;
    const volumeSliderPointMobile = volumeSliderPositionMobile * 100;
    // change volume slider fill
    volumeSliderMobile.style.background = `linear-gradient(90deg, transparent ${volumeSliderPointMobile}%, white ${
      volumeSliderPointMobile + 0.1
    }%)`;
  } else {
    //change audio volume based on slider
    let volumeSlider = document.querySelector("#volume-slider-video");
    const volumeSliderPosition = volumeSlider.value / 100;
    video.volume = volumeSliderPosition;
    const volumeSliderPoint = volumeSliderPosition * 100;
    // change volume slider fill
    volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
      volumeSliderPoint + 0.1
    }%)`;
  }
}

function upDateDurationVideo() {
  //change slider based on video time
  let durationSlider = document.querySelector("#duration-slider");
  if (!isNaN(video.duration)) {
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
      sliderPosition + 0.1
    }%)`;
  }
}

function forwardDurationVideo() {
  //change slider based on audio time
  let durationSlider = document.querySelector("#duration-slider");
  if (!isNaN(video.duration)) {
    // to speed up the video
    // video.playbackRate = video.playbackRate + 0.5;
    // forward the current video for 10s
    video.currentTime = video.currentTime + 10;
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
      sliderPosition + 0.1
    }%)`;
  }
}

function backwardDurationVideo() {
  //change slider based on audio time
  let durationSlider = document.querySelector("#duration-slider");
  if (!isNaN(video.duration)) {
    // to speed down the video
    // video.playbackRate = video.playbackRate - 0.5;
    // backward the current video for 10s
    video.currentTime = video.currentTime - 10;
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
      sliderPosition + 0.1
    }%)`;
  }
}

function addToFavoriteVideo() {
  document.getElementById("favorite-video").classList.toggle("add-to-favorite");
  document.getElementById("favorite").classList.toggle("add-to-favorite");
}

setInterval(upDateDurationVideo, 1000);

function setInitialVolumeFill() {
  if (mobile.matches) {
    // change volume slider fill mobile
    const volumeSliderMobile = document.querySelector("#volume-slider");
    const volumeSliderPositionMobile = volumeSliderMobile.value / 100;
    const volumeSliderPointMobile = volumeSliderPositionMobile * 100;
    volumeSliderMobile.style.background = `linear-gradient(90deg, transparent ${volumeSliderPointMobile}%, white ${
      volumeSliderPointMobile + 0.1
    }%)`;
  } else {
    // change volume slider fill
    const volumeSlider = document.querySelector("#volume-slider-video");
    const volumeSliderPosition = volumeSlider.value / 100;
    const volumeSliderPoint = volumeSliderPosition * 100;
    volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
      volumeSliderPoint + 0.1
    }%)`;
  }
}

setInitialVolumeFill();
