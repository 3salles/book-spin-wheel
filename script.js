let wheel = document.getElementById('physical-wheel');
let spinButton = document.getElementById('physical-spin-button');
let value = Math.ceil(Math.random() * 36000);

spinButton.onclick = function() {
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 36000);
}