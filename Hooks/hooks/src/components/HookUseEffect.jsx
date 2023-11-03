import { useEffect, useState } from 'react';

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  const [number, setNumber] = useState(0);

  const changeSomeathing = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('hello world!');
    //   setNumber(number + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [number]);
  return (
    <div>
      <h1>UseEffect</h1>
      <p>{number}</p>
      <button onClick={changeSomeathing}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
