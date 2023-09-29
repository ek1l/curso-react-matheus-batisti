import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Sobre = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>Diminuir</button>
      <h1>Sou o sobre</h1>
    </div>
  );
};

export default Sobre;
