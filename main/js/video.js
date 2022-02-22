let isPlayingVideo = false;
// Get the video element tag
const video = document.querySelector("video");
video.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
video.poster = "images/1.jpg";

function playVideo() {
  isPlayingVideo = true;

  //  Remove Pause Icon and Add Play Icon
  const icon = document.getElementById("video-play-pause-icon");
  icon.classList.remove("fa-play-circle");
  icon.classList.add("fa-pause-circle");
  video.volume = 1;

  video.play();
}

function pauseVideo() {
  isPlayingVideo = false;

  //  Remove Play Icon and Add Pause Icon
  const icon = document.getElementById("video-play-pause-icon");
  icon.classList.remove("fa-pause-circle");
  icon.classList.add("fa-play-circle");

  video.pause();
}

function playPauseVideo() {
  isPlayingVideo ? pauseVideo() : playVideo();
}

function changeVideoDuration() {
  //change video time based on slider
  let durationSlider = document.querySelector("#video-duration-slider");
  const sliderPosition = video.duration * (durationSlider.value / 100);
  video.currentTime = sliderPosition;
  const sliderPoint = video.currentTime * (100 / video.duration);
  // change slider fill
  durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPoint}%, white ${sliderPoint + 0.1}%)`;
}

function changeVideoVolume() {
  //change audio volume based on slider
  let volumeSlider = document.querySelector("#video-volume-slider");
  const volumeSliderPosition = volumeSlider.value / 100;
  video.volume = volumeSliderPosition;
  const volumeSliderPoint = volumeSliderPosition * 100;
  // change volume slider fill
  volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${volumeSliderPoint + 0.1}%)`;
}

function upDateDurationVideo() {
  //change slider based on video time
  let durationSlider = document.querySelector("#video-duration-slider");
  if (!isNaN(video.duration)) {
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${sliderPosition + 0.1}%)`;
  }
}

function forwardDurationVideo() {
  //change slider based on audio time
  let durationSlider = document.querySelector("#video-duration-slider");
  if (!isNaN(video.duration)) {
    // to speed up the video
    // video.playbackRate = video.playbackRate + 0.5;
    // forward the current video for 10s
    video.currentTime = video.currentTime + 10;
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${sliderPosition + 0.1}%)`;
  }
}

function backwardDurationVideo() {
  //change slider based on audio time
  let durationSlider = document.querySelector("#video-duration-slider");
  if (!isNaN(video.duration)) {
    // to speed down the video
    // video.playbackRate = video.playbackRate - 0.5;
    // backward the current video for 10s
    video.currentTime = video.currentTime - 10;
    const sliderPosition = video.currentTime * (100 / video.duration);
    durationSlider.value = sliderPosition;
    // change slider fill
    durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${sliderPosition + 0.1}%)`;
  }
}

function addToFavoriteVideo() {
  document.getElementById("favorite-video").classList.toggle("add-to-favorite-video");
}

setInterval(upDateDurationVideo, 1000);

// change volume slider fill
const volumeSlider = document.querySelector("#video-volume-slider");
const volumeSliderPosition = volumeSlider.value / 100;
const volumeSliderPoint = volumeSliderPosition * 100;
volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${volumeSliderPoint + 0.1}%)`;
