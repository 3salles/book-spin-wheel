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

// Usar a lista de livros digitais (ou físicos)
let data = digitalBooks;

let numSlots = data.length;
let wheel = document.getElementById("wheel");
let result = document.getElementById("chosen");
let spinButton = document.getElementById("spin-button");
let value = Math.ceil(Math.random() * 36000);

result.style.visibility = "hidden";

// Função para criar os slots
function createSlots() {
  // Limpar a roleta antes de adicionar novos slots
  wheel.innerHTML = '';

  // Cores variadas para os slots
  const colors = [
    '#6a0dad', '#9b59b6', '#8e44ad', '#f39c12', '#2ecc71',
    '#3498db', '#e74c3c', '#1abc9c', '#d35400', '#c0392b',
    '#34495e', '#7f8c8d'
  ];

  // Definir a rotação proporcional de cada slot
  let anglePerSlot = 360 / numSlots;

  data.forEach((livro, index) => {
    let slot = document.createElement("div");
    slot.classList.add("slot");
    slot.style.setProperty("--i", index);
    
    // Escolher uma cor de forma cíclica para cada slot
    let colorIndex = index % colors.length;
    slot.style.backgroundColor = colors[colorIndex];

    // Definir a rotação de cada slot
    slot.style.transform = `rotate(${anglePerSlot * index}deg)`;

    let span = document.createElement("p");
    span.textContent = livro;
    slot.appendChild(span);
    wheel.appendChild(slot);
  });
}

// Função para girar a roleta
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

  // Aplica a rotação inicial
  wheel.style.transition = "transform 5s ease-in-out";  // Transição suave

  // Inicializa a roleta para girar
  wheel.style.transform = "rotate(" + finalRotation + "deg)";
  value = finalRotation;  // Atualiza o valor de rotação

  result.style.visibility = "hidden";

  wheel.addEventListener('transitionend', function () {
    result.style.visibility = "visible"; // Exibe o resultado
    result.textContent = data[selectedIndex]; // Exibe o livro sorteado
  }, { once: true });
};

// Criar os slots ao carregar a página
createSlots();
