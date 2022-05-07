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

// When the user clicks anywhere outside of the audio modal, close it
window.onclick = function (event) {
  if (event.target == audioModal) {
    audioModal.style.display = "none";
  }
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

// When the user clicks anywhere outside of the video modal, close it
window.onclick = function (event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
};

///////////////////////////////////audio drag and drop handle////////////////////////////////
// Enhanced for my own purposes

var audioDropZoneOverlay = document.getElementsByClassName("drop-zone-overlay")[0];
var audioDropZone = document.getElementsByClassName("drop-zone")[0];

function scanAudioFiles(item) {
  if (item.isFile) {
    item.file(function (file) {
      console.log("jsFileObject", file);
    });
  }

  if (item.isDirectory) {
    let directoryReader = item.createReader();

    directoryReader.readEntries(function (entries) {
      entries.forEach(function (entry) {
        scanAudioFiles(entry);
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

  for (let i = 0; i < items.length; i++) {
    let item = items[i].webkitGetAsEntry();

    if (item) {
      scanAudioFiles(item);
    }
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

var videoDropZoneOverlay = document.getElementsByClassName("drop-zone-overlay")[1];
var videoDropZone = document.getElementsByClassName("drop-zone")[1];

function showVideoDropZoneOverlay() {
  videoDropZoneOverlay.style.display = "block";
}
function hideVideoDropZoneOverlay() {
  videoDropZoneOverlay.style.display = "none";
}

function allowVideoDrag(e) {
  if (true) {
    // Test that the item being dragged is a valid one
    e.dataTransfer.dropEffect = "copy";
    e.preventDefault();
  }
}

function handleVideoDrop(e) {
  e.preventDefault();
  hideVideoDropZoneOverlay();

  if (e.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < e.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (e.dataTransfer.items[i].kind === "file") {
        var file = e.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < e.dataTransfer.files.length; i++) {
      console.log("... file[" + i + "].name = " + e.dataTransfer.files[i].name);
    }
  }
}

// 1
videoDropZone.addEventListener("dragenter", function (e) {
  showVideoDropZoneOverlay();
});

2;
videoDropZoneOverlay.addEventListener("dragenter", allowVideoDrag);
videoDropZoneOverlay.addEventListener("dragover", allowVideoDrag);

// 3
videoDropZoneOverlay.addEventListener("dragleave", function (e) {
  console.log("dragleave");
  hideVideoDropZoneOverlay();
});

// 4
videoDropZoneOverlay.addEventListener("drop", handleVideoDrop);
