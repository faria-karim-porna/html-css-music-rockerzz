// Get the modal
var modal = document.getElementsByClassName("addAudioModal")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("addAudioModal-close")[0];

// When the user clicks the button, open the modal
function addAudioModalOpen() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

///////////////////////////////////drag and drop handle////////////////////////////////
// Enhanced for my own purposes

var dropZoneOverlay = document.getElementsByClassName("drop-zone-overlay")[0];
var dropZone = document.getElementsByClassName("drop-zone")[0];

function showAudioDropZoneOverlay() {
  dropZoneOverlay.style.display = "block";
}
function hideAudioDropZoneOverlay() {
  dropZoneOverlay.style.display = "none";
}

function allowAudioDrag(e) {
  if (true) {
    // Test that the item being dragged is a valid one
    e.dataTransfer.dropEffect = "copy";
    e.preventDefault();
  }
}

function handleAudioDrop(e) {
  e.preventDefault();
  hideAudioDropZoneOverlay();

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
dropZone.addEventListener("dragenter", function (e) {
  showAudioDropZoneOverlay();
});

2;
dropZoneOverlay.addEventListener("dragenter", allowAudioDrag);
dropZoneOverlay.addEventListener("dragover", allowAudioDrag);

// 3
dropZoneOverlay.addEventListener("dragleave", function (e) {
  console.log("dragleave");
  hideAudioDropZoneOverlay();
});

// 4
dropZoneOverlay.addEventListener("drop", handleAudioDrop);
