const Challenge = () => {
  const num1 = 1;
  const num2 = 2;
  function handleSoma() {
    console.log(num1 + num2);
  }

  return (
    <div>
      <h2>{num1}</h2>
      <h2>{num2}</h2>
      <button onClick={handleSoma}>Somar</button>
    </div>
  );
};

export default Challenge;
