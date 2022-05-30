// Get the audio modal
var audioModal = document.getElementsByClassName("addAudioModal")[0];

// Get the <span> element that closes the audio modal
var span = document.getElementsByClassName("addAudioModal-close")[0];

// When the user clicks the button, open the audio modal
function addAudioModalOpen() {
  audioModal.style.display = "block";
}

// When the user clicks on <span> (x), close the audio modal
span.onclick = function () {
  audioModal.style.display = "none";
};

// Get the video modal
var videoModal = document.getElementsByClassName("addVideoModal")[0];

// Get the <span> element that closes the video modal
var span = document.getElementsByClassName("addVideoModal-close")[0];

// When the user clicks the button, open the video modal
function addVideoModalOpen() {
  videoModal.style.display = "block";
}

// When the user clicks on <span> (x), close the video modal
span.onclick = function () {
  videoModal.style.display = "none";
};

// When the user clicks anywhere outside of the audio/video modal, close it
window.onclick = function (event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
  if (event.target == audioModal) {
    audioModal.style.display = "none";
  }
};

///////////////////////////////////audio drag and drop handle////////////////////////////////
// Enhanced for my own purposes

var audioDropZoneOverlay =
  document.getElementsByClassName("drop-zone-overlay")[0];
var audioDropZone = document.getElementsByClassName("drop-zone")[0];

function scanAudioFiles(item, formData, files) {
  if (item.isDirectory) {
    formData.append("albumName", item.name);
    formData.append("downloads", 0);
    formData.append("favoriteTo", []);
    formData.append("uploadingDate", new Date());
  }
  if (item.isFile) {
    item.file(function (file) {
      console.log("jsFileObject", file);
      files.push(file);
    });
  }

  if (item.isDirectory) {
    let directoryReader = item.createReader();

    directoryReader.readEntries(function (entries) {
      entries.forEach(function (entry) {
        scanAudioFiles(entry, formData, files);
      });
    });
  }
}

function allowAudioDrag(e) {
  if (true) {
    // Test that the item being dragged is a valid one
    e.dataTransfer.dropEffect = "copy";
    e.preventDefault();
  }
}

function handleAudioDrop(e) {
  let items = e.dataTransfer.items;

  e.preventDefault();
  const formData = new FormData();
  const files = [];
  for (let i = 0; i < items.length; i++) {
    let item = items[i].webkitGetAsEntry();

    if (item) {
      scanAudioFiles(item, formData, files);
    }

    const uploader = (files) => {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          for (let index = 0; index < files.length; index++) {
            formData.append("file", files[index]);
          }
          resolve("Stuff worked!");
        }, 10000);
      });
    };

    uploader(files).then((resolve) => {
      fetch("http://localhost:5000/uploadAudio", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());
    });
  }
}

function showAudioDropZoneOverlay() {
  audioDropZoneOverlay.style.display = "block";
}
function hideAudioDropZoneOverlay() {
  audioDropZoneOverlay.style.display = "none";
}

audioDropZone.addEventListener(
  "dragenter",
  function (e) {
    showAudioDropZoneOverlay();
  },
  false
);

audioDropZoneOverlay.addEventListener("dragenter", allowAudioDrag, false);

audioDropZoneOverlay.addEventListener("dragover", allowAudioDrag, false);

audioDropZoneOverlay.addEventListener(
  "dragleave",
  function (e) {
    console.log("dragleave");
    hideAudioDropZoneOverlay();
  },
  false
);

audioDropZoneOverlay.addEventListener("drop", handleAudioDrop, false);

///////////////////////////////////video drag and drop handle////////////////////////////////

var videoDropZoneOverlay =
  document.getElementsByClassName("drop-zone-overlay")[1];
var videoDropZone = document.getElementsByClassName("drop-zone")[1];

function scanVideoFiles(item) {
  if (item.isFile) {
    item.file(function (file) {
      console.log("jsFileObject video", file);
    });
  }

  if (item.isDirectory) {
    let directoryReader = item.createReader();

    directoryReader.readEntries(function (entries) {
      entries.forEach(function (entry) {
        scanVideoFiles(entry);
      });
    });
  }
}

function allowVideoDrag(e) {
  if (true) {
    // Test that the item being dragged is a valid one
    e.dataTransfer.dropEffect = "copy";
    e.preventDefault();
  }
}

function handleVideoDrop(e) {
  let items = e.dataTransfer.items;

  e.preventDefault();

  for (let i = 0; i < items.length; i++) {
    let item = items[i].webkitGetAsEntry();

    if (item) {
      scanVideoFiles(item);
    }
  }
}

function showVideoDropZoneOverlay() {
  videoDropZoneOverlay.style.display = "block";
}
function hideVideoDropZoneOverlay() {
  videoDropZoneOverlay.style.display = "none";
}

videoDropZone.addEventListener(
  "dragenter",
  function (e) {
    showVideoDropZoneOverlay();
  },
  false
);

videoDropZoneOverlay.addEventListener("dragenter", allowVideoDrag, false);

videoDropZoneOverlay.addEventListener("dragover", allowVideoDrag, false);

videoDropZoneOverlay.addEventListener(
  "dragleave",
  function (e) {
    console.log("dragleave");
    hideVideoDropZoneOverlay();
  },
  false
);

videoDropZoneOverlay.addEventListener("drop", handleVideoDrop, false);
