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
function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log("... file[" + i + "].name = " + ev.dataTransfer.files[i].name);
    }
  }
}

function dragOverHandler(ev) {
  console.log("File(s) in drop zone");
  document.getElementsByClassName("drop-zone-overlay")[0].style.display = "block";

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

function dragLeaveHandler(ev) {
  console.log("File(s) in drop zone");
  document.getElementsByClassName("drop-zone-overlay")[0].style.display = "none";

  // Prevent default behavior (Prevent file from being opened)
//   ev.preventDefault();
}
