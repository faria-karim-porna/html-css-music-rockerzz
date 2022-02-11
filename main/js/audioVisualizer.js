let isPlaying = false;

function playSong() {
  isPlaying = true;
  //  Add CD rotation
  const cdDisk = document.getElementById("cd-disk");
  cdDisk.classList.add("cd-disk-rotation");

  //  Remove Pause Icon and Add Play Icon
  const icon = document.getElementById("play-pause-icon");
  icon.classList.remove("fa-pause-circle");
  icon.classList.add("fa-play-circle");

  // The number of bars that should be displayed
  const NBR_OF_BARS = 20;

  // Get the audio element tag
  const audio = document.querySelector("audio");
  // audio.load();

  // Create an audio context
  const ctx = new AudioContext();

  // Create an audio source
  const audioSource = ctx.createMediaElementSource(audio);

  // Create an audio analyzer
  const analayzer = ctx.createAnalyser();

  // Connect the source, to the analyzer, and then back the the context's destination
  audioSource.connect(analayzer);
  audioSource.connect(ctx.destination);

  // Print the analyze frequencies
  const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
  analayzer.getByteFrequencyData(frequencyData);
  console.log("frequencyData", frequencyData);

  // Get the visualizer container
  const visualizerContainer = document.querySelector(".visualizer-container");

  // Create a set of pre-defined bars
  for (let i = 0; i < NBR_OF_BARS; i++) {
    const bar = document.createElement("DIV");
    bar.setAttribute("id", "bar" + i);
    bar.setAttribute("class", "visualizer-container__bar");
    visualizerContainer.appendChild(bar);
  }

  // This function has the task to adjust the bar heights according to the frequency data
  function renderFrame() {
    // Update our frequency data array with the latest frequency data
    analayzer.getByteFrequencyData(frequencyData);

    for (let i = 0; i < NBR_OF_BARS; i++) {
      // Since the frequency data array is 1024 in length, we don't want to fetch
      // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
      const index = (i + 10) * 2;
      // fd is a frequency value between 0 and 255
      let fd = frequencyData[index];
      fd = fd / 2;
      // Fetch the bar DIV element
      const bar = document.querySelector("#bar" + i);
      if (!bar) {
        continue;
      }

      // If fd is undefined, default to 0, then make sure fd is at least 4
      // This will make make a quiet frequency at least 4px high for visual effects
      const barHeight = Math.max(1, fd || 0);
      bar.style.height = barHeight + "px";
    }

    // At the next animation frame, call ourselves
    window.requestAnimationFrame(renderFrame);
  }

  renderFrame();

  audio.volume = 0.1;
  audio.play();
}

function pauseSong() {
  isPlaying = false;
  //  Remove CD rotation
  const cdDisk = document.getElementById("cd-disk");
  cdDisk.classList.remove("cd-disk-rotation");

  //  Remove Play Icon and Add Pause Icon
  const icon = document.getElementById("play-pause-icon");
  icon.classList.remove("fa-play-circle");
  icon.classList.add("fa-pause-circle");

  // Get the audio element tag
  const audio = document.querySelector("audio");
  audio.pause();
}

function playPause() {
  isPlaying ? pauseSong() : playSong();
}
