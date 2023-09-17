import './App.css';
import MyForm from './Components/MyForm';

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: 'Josias',
          email: 'josias@gmail.com',
          bio: 'Sou um advogado',
          role: 'Sou um admin',
        }}
      />
    </>
  );
}

export default App;
