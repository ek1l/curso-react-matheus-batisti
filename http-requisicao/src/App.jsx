import './App.css';
import { useState } from 'react';
// custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  //1 - hooks pegarDados
  const url = 'http://localhost:3000/products';
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { data, httpConfig, loading, error } = useFetch(url);

  // 2 - adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    httpConfig(product, 'POST');
    setPrice('');
    setName('');
  };

  const handleRemove = (id) => {
    httpConfig(id, 'DELETE');
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {data &&
          data.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button onClick={() => handleRemove(product.id)}>Delete</button>
            </li>
          ))}
        {loading && <p>Carregando...</p>}
        {error ? <p>{error}</p> : null}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading ? (
            <input type="submit" value="Carregando" disabled />
          ) : (
            <input type="submit" value="Enviar" />
          )}
        </form>
      </div>
    </div>
  );
}
export default App;
