// Card Data (Sample Data)
const deck1 = [
  {
    "name": "Deoxys-V",
    "image": "https://images.pokemontcg.io/swshp/SWSH266_hires.png",
    "amount": 1
  },
  {
    "name": "Gardevoir",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Kirlia",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Ralts",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 4
  },
  {
    "name": "Hatterene",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Hattrem",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Hatenna",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Cresselia",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Bug Catcher",
    "image": "https://images.pokemontcg.io/sm11/189_hires.png",
    "amount": 2
  },
  {
    "name": "Chef's Special",
    "image": "https://images.pokemontcg.io/swsh8/228_hires.png",
    "amount": 1
  },
  {
    "name": "Evolution Incense",
    "image": "https://images.pokemontcg.io/swsh1/163_hires.png",
    "amount": 2
  },
  {
    "name": "Great Ball",
    "image": "https://images.pokemontcg.io/sm35/60_hires.png",
    "amount": 4
  },
  {
    "name": "Arena Trainer",
    "image": "https://images.pokemontcg.io/swsh45/59_hires.png",
    "amount": 2
  },
  {
    "name": "Hop",
    "image": "https://images.pokemontcg.io/swsh35/53.png",
    "amount": 4
  },
  {
    "name": "Lucky Ice Pop",
    "image": "https://images.pokemontcg.io/swsh7/150_hires.png",
    "amount": 1
  },
  {
    "name": "Sonia",
    "image": "https://images.pokemontcg.io/swsh35/65_hires.png",
    "amount": 2
  },
  {
    "name": "Piers",
    "image": "https://images.pokemontcg.io/swsh35/58_hires.png",
    "amount": 1
  },
  {
    "name": "Pokémon Communication",
    "image": "https://images.pokemontcg.io/sm9/152_hires.png",
    "amount": 2
  },
  {
    "name": "Psynergy Brace",
    "image": "https://images.pokemontcg.io/dp1/127_hires.png",
    "amount": 18
  }
];
const deck2 = [
  {
    "name": "Venusaur V",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Yanmega",
    "image": "https://images.pokemontcg.io/20.pngg",
    "amount": 2
  },
  {
    "name": "Yanma",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Gogoat",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Skiddo",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Eldegoss",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Gossifleur",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Durant",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Heracross",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Indeedee",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Bede",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Dan",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 4
  },
  {
    "name": "Evolution Incense",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Great Ball",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Gym Trainer",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Hop",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 4
  },
  {
    "name": "Pokémon Catcher",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Potion",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Sonia",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Switch",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Grass Energy",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 18
  }
];
const deck3 = [
  {
    "name": "Venusaur V",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Miraidon",
    "image": "https://images.pokemontcg.io/20.pngg",
    "amount": 2
  },
  {
    "name": "Yanma",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Gogoat",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Skiddo",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Eldegoss",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Gossifleur",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Durant",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 3
  },
  {
    "name": "Heracross",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Indeedee",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Bede",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Dan",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 4
  },
  {
    "name": "Evolution Incense",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Great Ball",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Gym Trainer",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Hop",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 4
  },
  {
    "name": "Pokémon Catcher",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Potion",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Sonia",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 1
  },
  {
    "name": "Switch",
    "image": "https://images.pokemontcg.io/20.png",
    "amount": 2
  },
  {
    "name": "Grass Energy",
    "image": "https://images.pokemontcg.io/20.png",
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
const deck1Button = document.getElementById('deck1Button');
const deck2Button = document.getElementById('deck2Button');
const deck3Button = document.getElementById('deck3Button');
const closeButton = document.getElementsByClassName('close')[0];

// Open the modal
addCardButton.addEventListener('click', function() {
  addCardModal.style.display = 'block';
});

deck1Button.addEventListener('click', function() {
  displayCards(deck1);
});

deck2Button.addEventListener('click', function() {
  displayCards(deck2);
});

deck3Button.addEventListener('click', function() {
  displayCards(deck3);
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
