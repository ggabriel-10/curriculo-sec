import './App.css';
import { Conteudo } from './components/Conteudo';
import { Header } from './components/Header';
import {Study} from './components/Study';
import {Tecnologias} from './components/Tecnologias';
import { Contato } from './components/Contato';
import { Experiencias } from './components/Experiencias';

function App() {

  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Study />
      <Tecnologias />
      <Experiencias />
      <Contato/>
    </div>
  );
}

export default App;
