import { useState } from 'react';
import './MyForm.css';
const MyForm = () => {
  // 3 Gerenciamento de dados
  const [name, setname] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o formulário');
    console.log(name, email);
  };
  
  return (
    <div>
      {/* Envio de form*/}

      {/* Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          {/* Dados reativos sen passado para o useState*/}
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
          {name}
        </div>
        {/* Jeito certo de escrever um input */}
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Email" onChange={handleEmail} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
