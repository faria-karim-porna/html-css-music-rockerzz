let isPlayingVideo = false;
// let audioSource;
// let analayzer;

// // The number of bars that should be displayed
// const NBR_OF_BARS = 20;
const video = document.querySelector("video");

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

// function changeDuration() {
//   // Get the audio element tag
//   const audio = document.querySelector("audio");

//   //change audio time based on slider
//   let durationSlider = document.querySelector("#duration-slider");
//   const sliderPosition = audio.duration * (durationSlider.value / 100);
//   audio.currentTime = sliderPosition;
//   const sliderPoint = audio.currentTime * (100 / audio.duration);
//   // change slider fill
//   durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPoint}%, white ${
//     sliderPoint + 0.1
//   }%)`;
// }

// function changeVolume() {
//   // Get the audio element tag
//   const audio = document.querySelector("audio");

//   //change audio volume based on slider
//   let volumeSlider = document.querySelector("#volume-slider");
//   const volumeSliderPosition = volumeSlider.value / 100;
//   audio.volume = volumeSliderPosition;
//   const volumeSliderPoint = volumeSliderPosition * 100;
//   // change volume slider fill
//   volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
//     volumeSliderPoint + 0.1
//   }%)`;
// }

// function upDateDuration() {
//   // Get the audio element tag
//   const audio = document.querySelector("audio");

//   //change slider based on audio time
//   let durationSlider = document.querySelector("#duration-slider");
//   if (!isNaN(audio.duration)) {
//     const sliderPosition = audio.currentTime * (100 / audio.duration);
//     durationSlider.value = sliderPosition;
//     // change slider fill
//     durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
//       sliderPosition + 0.1
//     }%)`;
//   }
// }

// function forwardDuration() {
//   // Get the audio element tag
//   const audio = document.querySelector("audio");

//   //change slider based on audio time
//   let durationSlider = document.querySelector("#duration-slider");
//   if (!isNaN(audio.duration)) {
//     // to speed up the audio
//     // audio.playbackRate = audio.playbackRate + 0.5;
//     // forward the current audio for 10s
//     audio.currentTime = audio.currentTime + 10;
//     const sliderPosition = audio.currentTime * (100 / audio.duration);
//     durationSlider.value = sliderPosition;
//     // change slider fill
//     durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
//       sliderPosition + 0.1
//     }%)`;
//   }
// }

// function backwardDuration() {
//   // Get the audio element tag
//   const audio = document.querySelector("audio");

//   //change slider based on audio time
//   let durationSlider = document.querySelector("#duration-slider");
//   if (!isNaN(audio.duration)) {
//     // to speed down the audio
//     // audio.playbackRate = audio.playbackRate - 0.5;
//     // backward the current audio for 10s
//     audio.currentTime = audio.currentTime - 10;
//     const sliderPosition = audio.currentTime * (100 / audio.duration);
//     durationSlider.value = sliderPosition;
//     // change slider fill
//     durationSlider.style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
//       sliderPosition + 0.1
//     }%)`;
//   }
// }

// function addToFavorite() {
//   document
//     .getElementById("favorite")
//     .classList.toggle("add-to-favorite");
// }

// setInterval(upDateDuration, 1000);

// // change volume slider fill
// const volumeSlider = document.querySelector("#volume-slider");
// const volumeSliderPosition = volumeSlider.value / 100;
// const volumeSliderPoint = volumeSliderPosition * 100;
// volumeSlider.style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
//   volumeSliderPoint + 0.1
// }%)`;
