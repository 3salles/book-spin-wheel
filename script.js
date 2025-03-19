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

let data = physicalBooks

let wheel = document.getElementById("wheel");
let result = document.getElementById("chosen");
let spinButton = document.getElementById("spin-button");
// let value = Math.ceil(Math.random() * 36000);

// spinButton.onclick = function () {
//   wheel.style.transform = "rotate(" + value + "deg)";
//   value += Math.ceil(Math.random() * 36000);
// };


function criarSlots() {
  data.forEach((livro, index) => {
    let slot = document.createElement("div");
    slot.classList.add("slot");
    slot.style.setProperty("--i", index);

    let span = document.createElement("p");
    span.textContent = livro;
    slot.appendChild(span);
    wheel.appendChild(slot);
  });
}

let value = Math.ceil(Math.random() * 36000);
spinButton.onclick = function () {
  wheel.style.transition = "transform 5s ease-in-out";
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 36000); 
 
  setTimeout(() => {
    let degreePerSlot = 360 / data.length;
    let chosenIndex = Math.floor(((value % 360) / degreePerSlot) % data.length);
    result.textContent = data[chosenIndex]; 
  }, 5000);
};

criarSlots();