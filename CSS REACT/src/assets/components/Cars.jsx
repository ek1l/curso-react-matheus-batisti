import { useState } from 'react';
import styles from './Cars.module.css';
const Cars = () => {
  const [ativar, setAtivar] = useState(false);
  const handleClick = () => {
    setAtivar(!ativar);
  };
  let cars = [{ id: 2, name: 'camaro', marca: 'Fiat' }];
  return (
    <div className={styles.container}>
      <ul className={ativar ? styles.ul : styles.ulDark}>
        {cars.map((item) => (
          <li key={item.id}>
            O carro se chaam {item.name} e a marca é {item.marca}{' '}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Ativar ou desativar</button>
    </div>
  );
};

export default Cars;
