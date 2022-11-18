const text = document.getElementsByClassName("section-1")[0];
text.innerHTML = text.innerText
  .split("")
  .map((char, i) => `<span style="transform:rotate(${-75 + (i * 10)}deg)">${char}</span>`)
  .join("");
