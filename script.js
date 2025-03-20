let physicalBooks = [
  "Os Sertões",
  "Dracula",
  "Wicked",
  "Sherlock Holmes Vol. 1",
  "A Sociedade do Anel",
  "Alice au Pays de Merveilles",
  "Les Trois Mousquetaires",
  "Frankenstein",
];

let digitalBooks = [
  "O Livro das Portas",
  "Anjos e Demonios",
  "A sociedade supersecreta de bruxas rebeldes",
  "E Sobrou Nenhum",
  'A biblioteca da meia noite',
  'Circe',
  'O Guia do Clube de Leitura do Sul para Matar Vampiros',
  'Ulysses',
  'O Grande Gatsby',
  'A vida de Pi',
  'Cancao de Aquiles'
];

let data = digitalBooks;

let numSlots = data.length;
let wheel = document.getElementById("wheel");
let spinButton = document.getElementById("spin-button");
let value = Math.ceil(Math.random() * 36000);
let physicalButton = document.getElementById("physical-button");
let digitalButton = document.getElementById("digital-button");




function createSlots() {
  wheel.innerHTML = '';

  const colors = [
    '#6a0dad', '#9b59b6', '#8e44ad', '#f39c12', '#2ecc71',
    '#3498db', '#e74c3c', '#1abc9c', '#d35400', '#c0392b',
    '#34495e', '#7f8c8d'
  ];

  let anglePerSlot = 360 / numSlots;

  data.forEach((livro, index) => {
    let slot = document.createElement("div");
    slot.classList.add("slot");
    slot.style.setProperty("--i", index);
    
    let colorIndex = index % colors.length;
    slot.style.backgroundColor = colors[colorIndex];
    slot.style.transform = `rotate(${anglePerSlot * index}deg)`;

    let span = document.createElement("p");
    span.textContent = livro;
    slot.appendChild(span);
    wheel.appendChild(slot);
  });
}

physicalButton.onclick = function () {
  data = physicalBooks;
  numSlots = data.length;
  createSlots();
}

digitalButton.onclick = function () {
  data = digitalBooks;
  numSlots = data.length;
  createSlots();
}

spinButton.onclick = function () {
  let selectedIndex = Math.floor(Math.random() * numSlots);
  let anglePerSlot = 360 / numSlots;
  let rotationAngle = anglePerSlot * selectedIndex;
  let extraRotations = Math.floor(Math.random() * 5) * 360;
  let totalRotation = extraRotations + rotationAngle;
  let finalRotation = value + totalRotation;

  wheel.style.transition = "transform 5s ease-in-out";
  wheel.style.transform = "rotate(" + finalRotation + "deg)";
  value = finalRotation;
};

createSlots();
