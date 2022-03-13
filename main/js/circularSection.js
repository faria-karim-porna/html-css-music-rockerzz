document.getElementsByClassName("disk-1")[0].style.left = "24%";
document.getElementsByClassName("disk-1")[0].style.top = "160px";
document.getElementsByClassName("disk-1")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-2")[0].style.left = "42%";
document.getElementsByClassName("disk-2")[0].style.top = "10px";
document.getElementsByClassName("disk-2")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-3")[0].style.left = "60%";
document.getElementsByClassName("disk-3")[0].style.top = "160px";
document.getElementsByClassName("disk-3")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-4")[0].style.left = "70%";
document.getElementsByClassName("disk-4")[0].style.top = "510px";
document.getElementsByClassName("disk-4")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-5")[0].style.left = "60%";
document.getElementsByClassName("disk-5")[0].style.top = "860px";
document.getElementsByClassName("disk-5")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-6")[0].style.left = "42%";
document.getElementsByClassName("disk-6")[0].style.top = "1010px";
document.getElementsByClassName("disk-6")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-7")[0].style.left = "24%";
document.getElementsByClassName("disk-7")[0].style.top = "860px";
document.getElementsByClassName("disk-7")[0].style.transition = "0.5s";

document.getElementsByClassName("disk-8")[0].style.left = "14%";
document.getElementsByClassName("disk-8")[0].style.top = "510px";
document.getElementsByClassName("disk-8")[0].style.transition = "0.5s";

function circularLeftTopValueForward(className) {
  const leftValue = document.getElementsByClassName(className)[0].style.left;
  const topValue = document.getElementsByClassName(className)[0].style.top;
  if (leftValue === "24%" && topValue === "160px") {
    document.getElementsByClassName(className)[0].style.left = "42%";
    document.getElementsByClassName(className)[0].style.top = "10px";
  } else if (leftValue === "42%" && topValue === "10px") {
    document.getElementsByClassName(className)[0].style.left = "60%";
    document.getElementsByClassName(className)[0].style.top = "160px";
  } else if (leftValue === "60%" && topValue === "160px") {
    document.getElementsByClassName(className)[0].style.left = "70%";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "70%" && topValue === "510px") {
    document.getElementsByClassName(className)[0].style.left = "60%";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "60%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "42%";
    document.getElementsByClassName(className)[0].style.top = "1010px";
  } else if (leftValue === "42%" && topValue === "1010px") {
    document.getElementsByClassName(className)[0].style.left = "24%";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "24%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "14%";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else {
    document.getElementsByClassName(className)[0].style.left = "24%";
    document.getElementsByClassName(className)[0].style.top = "160px";
  }
}

function circularLeftTopValueBackward(className) {
  const leftValue = document.getElementsByClassName(className)[0].style.left;
  const topValue = document.getElementsByClassName(className)[0].style.top;
  if (leftValue === "24%" && topValue === "160px") {
    document.getElementsByClassName(className)[0].style.left = "14%";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "42%" && topValue === "10px") {
    document.getElementsByClassName(className)[0].style.left = "24%";
    document.getElementsByClassName(className)[0].style.top = "160px";
  } else if (leftValue === "60%" && topValue === "160px") {
    document.getElementsByClassName(className)[0].style.left = "42%";
    document.getElementsByClassName(className)[0].style.top = "10px";
  } else if (leftValue === "70%" && topValue === "510px") {
    document.getElementsByClassName(className)[0].style.left = "60%";
    document.getElementsByClassName(className)[0].style.top = "160px";
  } else if (leftValue === "60%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "70%";
    document.getElementsByClassName(className)[0].style.top = "510px";
  } else if (leftValue === "42%" && topValue === "1010px") {
    document.getElementsByClassName(className)[0].style.left = "60%";
    document.getElementsByClassName(className)[0].style.top = "860px";
  } else if (leftValue === "24%" && topValue === "860px") {
    document.getElementsByClassName(className)[0].style.left = "42%";
    document.getElementsByClassName(className)[0].style.top = "1010px";
  } else {
    document.getElementsByClassName(className)[0].style.left = "24%";
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
