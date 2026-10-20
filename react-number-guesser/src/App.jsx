import { useState } from 'react';
import './App.css';

const App = () => {
  const [guess, setGuess] = useState('');
  const [computerNumber, setComputerNumber] = useState(0);
  const [result, setResult] = useState('');

  let resultClass = '';

  if (result === 'You guessed correctly.') {
    resultClass = 'success';
  } else if (result === 'Try again.') {
    resultClass = 'error';
  } else if (result !== '') {
    resultClass = 'warning';
  }

  const handleGuess = () => {
    if (guess === '' || guess < 1 || guess > 10) {
      setResult('Please enter a number between 1 and 10.');
      return;
    }

    const randomNumber = computerRandomNumber();

    setComputerNumber(randomNumber);

    if (guess === randomNumber) {
      setResult('You guessed correctly.');
    } else {
      setResult('Try again.');
    }

    console.log(`The computer guesses ${randomNumber}`);
  };

  const handleReset = () => {
    setGuess('');
    setComputerNumber(0);
    setResult('');
  };

  const computerRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
  };

  return (
    <main className="game-card">
      <h1>React Number Guesser</h1>
      <p>Guess the number and beat the computer!</p>
      <p>Your guess is {guess}</p>
      <p>Computers number: {computerNumber}</p>
      <p
        className={`game-result ${resultClass}`}
      >
        {result}
      </p>
      <input
        min={1}
        max={10}
        type="number"
        value={guess}
        onChange={(e) =>
          setGuess(e.target.value === '' ? '' : Number(e.target.value))
        }
      />
      <div className="button-group">
        <button className="btn-primary" onClick={handleGuess}>
          Set Guess
        </button>
        <button className="btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </main>
  );
};

export default App;
