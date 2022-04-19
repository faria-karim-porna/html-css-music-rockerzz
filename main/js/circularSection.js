document.getElementsByClassName("disk-1")[0].style.left = "25%";
document.getElementsByClassName("disk-1")[0].style.transform = "translate(-25%, 0)";
document.getElementsByClassName("disk-1")[0].style.top = "calc(8vw + 10px)";
document.getElementsByClassName("disk-1")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-2")[0].style.left = "50%";
document.getElementsByClassName("disk-2")[0].style.transform = "translate(-50%, 0)";
document.getElementsByClassName("disk-2")[0].style.top = "10px";
document.getElementsByClassName("disk-2")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-3")[0].style.left = "75%";
document.getElementsByClassName("disk-3")[0].style.transform = "translate(-75%, 0)";
document.getElementsByClassName("disk-3")[0].style.top = "calc(8vw + 10px)";
document.getElementsByClassName("disk-3")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-4")[0].style.left = "100%";
document.getElementsByClassName("disk-4")[0].style.transform = "translate(-100%, 0)";
document.getElementsByClassName("disk-4")[0].style.top = "510px";
document.getElementsByClassName("disk-4")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-5")[0].style.left = "75%";
document.getElementsByClassName("disk-5")[0].style.transform = "translate(-75%, 0)";
document.getElementsByClassName("disk-5")[0].style.top = "860px";
document.getElementsByClassName("disk-5")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-6")[0].style.left = "50%";
document.getElementsByClassName("disk-6")[0].style.transform = "translate(-50%, 0)";
document.getElementsByClassName("disk-6")[0].style.top = "1010px";
document.getElementsByClassName("disk-6")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-7")[0].style.left = "25%";
document.getElementsByClassName("disk-7")[0].style.transform = "translate(-25%, 0)";
document.getElementsByClassName("disk-7")[0].style.top = "860px";
document.getElementsByClassName("disk-7")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-8")[0].style.left = "0%";
document.getElementsByClassName("disk-8")[0].style.transform = "translate(0%, 0)";
document.getElementsByClassName("disk-8")[0].style.top = "510px";
document.getElementsByClassName("disk-8")[0].style.transition = "0.5s";

function circularLeftTopValueForward(className) {
  const leftValue = document.getElementsByClassName(className)[0].style.left;
  const topValue = document.getElementsByClassName(className)[0].style.top;
  if (leftValue === "25%" && topValue === "calc(8vw + 10px)") {
    document.getElementsByClassName(className)[0].style.left = "50%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-50%, 0)";
    document.getElementsByClassName(className)[0].style.top = "10px";
  } else if (leftValue === "50%" && topValue === "10px") {
    document.getElementsByClassName(className)[0].style.left = "75%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-75%, 0)";
    document.getElementsByClassName(className)[0].style.top = "calc(8vw + 10px)";
  } else if (leftValue === "75%" && topValue === "calc(8vw + 10px)") {
    document.getElementsByClassName(className)[0].style.left = "100%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-100%, 0)";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "100%" && topValue === "510px") {
    document.getElementsByClassName(className)[0].style.left = "75%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-75%, 0)";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "75%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "50%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-50%, 0)";
    document.getElementsByClassName(className)[0].style.top = "1010px";
  } else if (leftValue === "50%" && topValue === "1010px") {
    document.getElementsByClassName(className)[0].style.left = "25%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-25%, 0)";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "25%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "0%";
    document.getElementsByClassName(className)[0].style.transform = "translate(0%, 0)";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else {
    document.getElementsByClassName(className)[0].style.left = "25%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-25%, 0)";
    document.getElementsByClassName(className)[0].style.top = "calc(8vw + 10px)";
  }
}

function circularLeftTopValueBackward(className) {
  const leftValue = document.getElementsByClassName(className)[0].style.left;
  const topValue = document.getElementsByClassName(className)[0].style.top;
  if (leftValue === "25%" && topValue === "calc(8vw + 10px)") {
    document.getElementsByClassName(className)[0].style.left = "0%";
    document.getElementsByClassName(className)[0].style.transform = "translate(0%, 0)";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "50%" && topValue === "10px") {
    document.getElementsByClassName(className)[0].style.left = "25%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-25%, 0)";
    document.getElementsByClassName(className)[0].style.top = "calc(8vw + 10px)";
  } else if (leftValue === "75%" && topValue === "calc(8vw + 10px)") {
    document.getElementsByClassName(className)[0].style.left = "50%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-50%, 0)";
    document.getElementsByClassName(className)[0].style.top = "10px";
  } else if (leftValue === "100%" && topValue === "510px") {
    document.getElementsByClassName(className)[0].style.left = "75%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-75%, 0)";
    document.getElementsByClassName(className)[0].style.top = "calc(8vw + 10px)";
  } else if (leftValue === "75%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "100%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-100%, 0)";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "50%" && topValue === "1010px") {
    document.getElementsByClassName(className)[0].style.left = "75%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-75%, 0)";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "25%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "50%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-50%, 0)";
    document.getElementsByClassName(className)[0].style.top = "1010px";
  } else {
    document.getElementsByClassName(className)[0].style.left = "25%";
    document.getElementsByClassName(className)[0].style.transform = "translate(-25%, 0)";
    document.getElementsByClassName(className)[0].style.top = "860px";
  }
}

function circularForwardButton() {
  circularLeftTopValueForward("disk-1");
  circularLeftTopValueForward("disk-2");
  circularLeftTopValueForward("disk-3");
  circularLeftTopValueForward("disk-4");
  circularLeftTopValueForward("disk-5");
  circularLeftTopValueForward("disk-6");
  circularLeftTopValueForward("disk-7");
  circularLeftTopValueForward("disk-8");
}

function circularBackwardButton() {
  circularLeftTopValueBackward("disk-1");
  circularLeftTopValueBackward("disk-2");
  circularLeftTopValueBackward("disk-3");
  circularLeftTopValueBackward("disk-4");
  circularLeftTopValueBackward("disk-5");
  circularLeftTopValueBackward("disk-6");
  circularLeftTopValueBackward("disk-7");
  circularLeftTopValueBackward("disk-8");
}
