let content = [
  "Cloudwalkers",
  "Daydreamers",
  "Mavericks",
  "Unconventional",
  "Ingenious",
  "Contrarians",
];
let count = 0;
let count_index = 0;
let interval_val;
let element = document.querySelector("#typewriter");

function type() {
  let text = content[count].substring(0, count_index + 1);
  element.innerHTML = text;
  count_index++;
  if (text === content[count]) {
    clearInterval(interval_val);
    setTimeout(function () {
      interval_val = setInterval(toDelete, 500);
    }, 1000);
  }
}

function toDelete() {
  let text = content[count].substring(0, count_index - 1);
  element.innerHTML = text;
  count_index--;
  if (text === "") {
    clearInterval(interval_val);
    if (count == content.length - 1) count = 0;
    else count++;
    count_index = 0;
    setTimeout(function () {
      interval_val = setInterval(type, 250);
    }, 200);
  }
}
interval_val = setInterval(type, 250);
