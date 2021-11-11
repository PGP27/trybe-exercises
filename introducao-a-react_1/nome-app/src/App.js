// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Estudar React', 'Atualizar portifólio', 'Lavar a louça'];

function App() {
    return (
      <ul>{array.map((element) => Task(element))}</ul>
    );
}

export default App;
