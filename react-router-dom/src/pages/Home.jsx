import style from './Home.module.css';

import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const Home = () => {
  const url = 'http://localhost:3000/products';
  const { data: items, loading, error } = useFetch(url);
  if (loading) return <p>carregando</p>;
  return (
    <div className={style.container}>
      <h1>Produtos</h1>

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
