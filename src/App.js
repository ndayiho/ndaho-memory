import React from 'react';
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'

const SIDE = 6
const SYMBOLS = 'ππππ©πΆπ±π¦π¬ππππ«ππππππΏ'

const generateCards = () => {
  const result = []
  const size = SIDE * SIDE
  const candidates = shuffle(SYMBOLS)
  while (result.length < size) {
    const card = candidates.pop()
    result.push(card, card)
  }
  return shuffle(result)
}


const App = () => {

  const cards = generateCards();

  const handleCardClick = cardValue => {
    console.log(`click on  ${cardValue}`)
  }

  const won = new Date().getSeconds() % 2 === 0

  return (
    <div className="memory">
      <GuessCount guesses={0} />
      <Card card="π" feedback="hidden" onClick={handleCardClick} />
      <Card card="π" feedback="justMatched" onClick={handleCardClick} />
      <Card
        card="π"
        feedback="justMismatched"
        onClick={handleCardClick}
      />
      <Card card="π©" feedback="visible" onClick={handleCardClick} />
      <Card card="πΆ" feedback="hidden" onClick={handleCardClick} />
      <Card card="π±" feedback="justMatched" onClick={handleCardClick} />
      {won && <p>GAGNΓ !</p>}
    </div>
  )
}

export default App;
