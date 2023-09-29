import style from './Home.module.css';
// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';
import { useCounterContext } from '../hooks/useCounterContext';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

import { CounterContext } from '../context/CounterContext';

const Home = () => {
  const { counter, setCounter } = useCounterContext(CounterContext);
  // const { counter, setCounter } = useContext(CounterContext);
  const { color, dispatch } = useTitleColorContext();
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  const url = 'http://localhost:3000/products';
  const { data: items, loading, error } = useFetch(url);
  if (loading) return <p>carregando</p>;
  return (
    <div className={style.container}>
      <h1 style={{ color: color }}>Produtos</h1>
      <button onClick={({ target }) => setTitleColor(target.innerText)}>
        BLUE
      </button>
      <button onClick={({ target }) => setTitleColor(target.innerText)}>
        RED
      </button>
      <p>Número do contexto é : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aumentar Contexto</button>
      <ul className={style.products}>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        {error && <p>{error}</p>}
      </ul>
    </div>
  );
};

export default Home;
