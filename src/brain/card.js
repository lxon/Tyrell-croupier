export function generateCards() {
  const cards = new Array(52);
  for (let i = 0; i < cards.length; i++) {
    cards[i] = i;
  }
  return cards;
}

export function shuffle(cards) {
  for (let i = 0; i < cards.length; i++) {
    const rnd = (Math.random() * i) | 0;
    const tmp = cards[i];
    cards[i] = cards[rnd];
    cards[rnd] = tmp;
  }
  return cards;
}

export function generateDeck() {
  const ranks = "a 2 3 4 5 6 7 8 9 10 j q k".split(" ");
  const suits = "spades hearts clubs diams".split(" ");
  //   const suits = "♠︎ ♥︎ ♣︎ ♦︎".split(" ");
  //   const suits = "S H C D".split(" ");

  let cards = generateCards();

  const getProperties = (i) => {
    const rank = i % 13;
    // const value = rank + 1;
    const suit = (i / 13) | 0;

    // return { ranks: ranks[rank], suit: suits[suit] };
    // return { card: `${suits[suit]}-${ranks[rank]}`, ranks:  };
    return {
      rank,
      ranks: ranks[rank],
      suit: suits[suit],
      suitCode: `&${suits[suit]};`,
    };
  };

  return shuffle(cards.map(getProperties));
}

export function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export function distribute(numberOfPlayers) {
  const deck = generateDeck();
  const remainer = deck.length % numberOfPlayers;

  if (remainer !== 0) {
    numberOfPlayers = numberOfPlayers ? numberOfPlayers : 0;
    const msg = {
      error: "001",
      msg: `The 52 cards cannot distribute evenly among ${numberOfPlayers} players.`,
    };
    return msg;
  }

  const result = sliceIntoChunks(deck, deck.length / numberOfPlayers);
  return result;
}
