import {Greet} from './components/Greet'
import './App.css';
import { Pessoa } from './components/Pessoa';
import { PessoaLista } from './components/PessoaLista';

function App() {
const NamePerson = {
  primeiroNome: 'Marlon',
  segundoNome: 'Yuri',
}

const nameList = [
  {
    first: 'Marlon',
    second: 'Yuri'
  },
  {
    first: 'Dandara',
    second: 'Aryadne'
  },
  {
    first: 'Gian',
    second: 'Gomes'
  }
]

  return (
    <div className="App">

      <Greet name = 'Marlon Yuri' msgCount={10}/>

      <Pessoa name={NamePerson}/>

      <PessoaLista names={nameList}/>

    </div>
  );
}

export default App;
