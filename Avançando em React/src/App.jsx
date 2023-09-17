import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  let arrDesafio = [
    {
      id: 1,
      nome: 'Leonardo',
      idade: '19',
      profissao: ['Software Engineer', 'WebDesign', 'Full-Stack Developer'],
    },
    {
      id: 1,
      nome: 'Bruno',
      idade: '15',
      profissao: ['Software Engineer', 'WebDesign', 'Full-Stack Developer'],
    },
    {
      id: 1,
      nome: 'Rafaela',
      idade: '25',
      profissao: ['Software Engineer', 'WebDesign', 'Full-Stack Developer'],
    },
    {
      id: 1,
      nome: 'Gustavo',
      idade: '11',
      profissao: ['Software Engineer', 'WebDesign', 'Full-Stack Developer'],
    },
  ];
  return (
    <>
      <ul>
        {arrDesafio.map((item) => (
          <>
            <UserDetails
              key={item.id}
              nome={item.nome}
              idade={item.idade}
              profissao={item.profissao.join(', ')}
            />
            {item.idade >= 18 ? <p>PODE DIRIGIR</p> : <p>NÃO PODE DIRIGIR</p>}
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
