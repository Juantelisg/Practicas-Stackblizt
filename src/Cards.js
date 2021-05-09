import React from 'react';
import Card from 'Card.js';
const cards = [
  {
    id: 1,
    title: 'Apple',
    hobbie: 'React'
  },
  {
    id: 2,
    title: 'Xiaomi',
    hobbie: 'Vue'
  },
  {
    id: 3,
    title: 'Samsung',
    hobbie: 'React'
  }
];

function Cards() {
  return (
    <div>
      <div>
        {cards.map(card => (
          <div>
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
