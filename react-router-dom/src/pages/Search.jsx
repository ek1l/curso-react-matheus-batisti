import { useSearchParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const Search = () => {
  const [searchParams] = useSearchParams();
  const url = 'http://localhost:3000/products?' + searchParams;
  const { data: items, loading, error } = useFetch(url);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Resoltados disponíveis:</h1>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}/info`}>Mais informações</Link>
            </li>
          ))}
        {error && <h1>{error}</h1>}
      </ul>
    </div>
  );
};

export default Search;
