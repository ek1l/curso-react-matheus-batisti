import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useCounterContext } from '../hooks/useCounterContext';
const Product = () => {
  const { counter } = useCounterContext();
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  if (loading) return <h1>Carregando...</h1>;
  return (
    <div>
      <p>ID DO PRODUTO {id}</p>
      {counter}
      <ul>
        {product ? (
          <li>
            <h1>{product.name}</h1>
            <p>R$: {product.price}</p>
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
          </li>
        ) : null}
        {error && <p>{error}</p>}
      </ul>
    </div>
  );
};

export default Product;
