// Card Data (Sample Data)
const cardData = [
  {
    "name": "Deoxys-V",
    "image": "https://example.com/deoxys-v.jpg",
    "amount": 1
  },
  {
    "name": "Gardevoir",
    "image": "https://example.com/gardevoir.jpg",
    "amount": 2
  },
  {
    "name": "Kirlia",
    "image": "https://example.com/kirlia.jpg",
    "amount": 3
  },
  {
    "name": "Ralts",
    "image": "https://example.com/ralts.jpg",
    "amount": 4
  },
  {
    "name": "Hatterene",
    "image": "https://example.com/hatterene.jpg",
    "amount": 2
  },
  {
    "name": "Hattrem",
    "image": "https://example.com/hattrem.jpg",
    "amount": 3
  },
  {
    "name": "Hatenna",
    "image": "https://example.com/hatenna.jpg",
    "amount": 2
  },
  {
    "name": "Cresselia",
    "image": "https://example.com/cresselia.jpg",
    "amount": 1
  },
  {
    "name": "Bug Catcher",
    "image": "https://example.com/bug-catcher.jpg",
    "amount": 2
  },
  {
    "name": "Chef's Special",
    "image": "https://example.com/chefs-special.jpg",
    "amount": 1
  },
  {
    "name": "Evolution Incense",
    "image": "https://example.com/evolution-incense.jpg",
    "amount": 2
  },
  {
    "name": "Great Ball",
    "image": "https://example.com/great-ball.jpg",
    "amount": 4
  },
  {
    "name": "Arena Trainer",
    "image": "https://example.com/arena-trainer.jpg",
    "amount": 2
  },
  {
    "name": "Hop",
    "image": "https://example.com/hop.jpg",
    "amount": 4
  },
  {
    "name": "Lucky Ice Pop",
    "image": "https://example.com/lucky-ice-pop.jpg",
    "amount": 1
  },
  {
    "name": "Sonia",
    "image": "https://example.com/sonia.jpg",
    "amount": 2
  },
  {
    "name": "Piers",
    "image": "https://example.com/piers.jpg",
    "amount": 1
  },
  {
    "name": "Pokémon Communication",
    "image": "https://example.com/pokemon-communication.jpg",
    "amount": 2
  },
  {
    "name": "Psynergy Brace",
    "image": "https://example.com/psynergy-brace.jpg",
    "amount": 18
  }
];


// Function to display the cards
function displayCards(cards) {
  const cardList = document.getElementById('cardList');
  cardList.innerHTML = '';

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = card.image;
    imageElement.alt = card.name;

    const nameElement = document.createElement('h3');
    nameElement.textContent = card.name;

    const amountElement = document.createElement('p');
    amountElement.textContent = `Amount: ${card.amount}`;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameElement);
    cardElement.appendChild(amountElement);

    cardList.appendChild(cardElement);
  });
}

// Display all cards initially
displayCards(cardData);

// Function to filter cards based on search input
function filterCards() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredCards = cardData.filter(card =>
    card.name.toLowerCase().includes(searchTerm)
  );

  displayCards(filteredCards);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', filterCards);

// Modal functionality
const addCardModal = document.getElementById('addCardModal');
const addCardButton = document.getElementById('addCardButton');
const closeButton = document.getElementsByClassName('close')[0];

// Open the modal
addCardButton.addEventListener('click', function() {
  addCardModal.style.display = 'block';
});

// Close the modal
closeButton.addEventListener('click', function() {
  addCardModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target == addCardModal) {
    addCardModal.style.display = 'none';
  }
});

// Add Card functionality
const addCardForm = document.getElementById('addCardForm');

addCardForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const cardNameInput = document.getElementById('cardName');
  const cardImageInput = document.getElementById('cardImage');
  const cardAmountInput = document.getElementById('cardAmount');

  const card = {
    name: cardNameInput.value,
    image: cardImageInput.value,
    amount: parseInt(cardAmountInput.value)
  };

  cardData.push(card);
  displayCards(cardData);

  cardNameInput.value = '';
  cardImageInput.value = '';
  cardAmountInput.value = '';

  addCardModal.style.display = 'none';
});
