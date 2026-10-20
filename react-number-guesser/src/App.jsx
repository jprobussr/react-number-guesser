import { useState } from 'react';
import './App.css';

const App = () => {
  const [guess, setGuess] = useState(0);
  const [computerNumber, setComputerNumber] = useState(0);
  const [result, setResult] = useState('');

  const handleGuess = () => {

    if (guess < 1 || guess > 10) {
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
    setGuess(0);
    setComputerNumber(0);
    setResult('');
  }

  const computerRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
  };

  return (
    <main>
      <h1>React Number Guesser</h1>
      <p>Guess the number and beat the computer!</p>
      <p>Your guess is {guess}</p>
      <p>Computers number: {computerNumber}</p>
      <p>{result}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(Number(e.target.value))}
      />
      <button onClick={handleGuess}>Set Guess</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
};

export default App;
