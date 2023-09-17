import { useState } from 'react';
import './MyForm.css';
// eslint-disable-next-line react/prop-types
const MyForm = ({ user }) => {
  // controller inputs

  // 3 Gerenciamento de dados
  // eslint-disable-next-line react/prop-types
  const [name, setname] = useState(user ? user.name : '');
  // eslint-disable-next-line react/prop-types
  const [email, setEmail] = useState(user ? user.email : '');
  // eslint-disable-next-line react/prop-types
  const [bio, setBio] = useState(user ? user.bio : '');
  // eslint-disable-next-line react/prop-types
  const [role, setRole] = useState(user ? user.role : '');
  const handleName = (e) => {
    setname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o formulário');
    console.log(name, email, bio, role);
    // validação
    //envio
    // limpar formulário
    setname('');
    setEmail('');
    setBio('');
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
            value={name}
          />
          {name}
        </div>
        {/* Jeito certo de escrever um input */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
        </label>
        {/* TextArea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="vazio">Selecione</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
