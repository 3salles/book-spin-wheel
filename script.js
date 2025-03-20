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
let numSlots = data.length;
let wheel = document.getElementById("wheel");
let result = document.getElementById("chosen");
let spinButton = document.getElementById("spin-button");
let value = Math.ceil(Math.random() * 36000); 

result.style.visibility = "hidden";

function createSlots() {
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

spinButton.onclick = function () {
  // Sorteia um índice aleatório para o livro
  let selectedIndex = Math.floor(Math.random() * numSlots);

  // Calcula o ângulo correspondente ao índice selecionado
  let anglePerSlot = 360 / numSlots;
  let rotationAngle = anglePerSlot * selectedIndex;

  // Adiciona um valor aleatório para fazer a roleta girar algumas voltas extras
  let extraRotations = Math.floor(Math.random() * 5) * 360;

  // Soma o ângulo da rotação ao valor extra para dar a sensação de aleatoriedade
  let totalRotation = extraRotations + rotationAngle;

  // Adiciona a rotação à variável 'value' para efeito de rotação contínua
  let finalRotation = value + totalRotation;

  // Aplique a rotação inicial
  wheel.style.transition = "transform 5s ease-in-out";  // Adiciona uma transição suave

  // Inicializa a roleta para girar
  wheel.style.transform = "rotate(" + finalRotation + "deg)";
  value = finalRotation;  // Atualiza o valor de rotação

  result.style.visibility = "hidden";

  wheel.addEventListener('transitionend', function () {
    result.style.visibility = "visible"; // Exibe o resultado
    result.textContent = data[selectedIndex]; // Atualiza o texto com o livro sorteado
  }, { once: true });
};

createSlots();