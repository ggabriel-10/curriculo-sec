import './App.css';
import { Conteudo } from './components/Conteudo';
import { Header } from './components/Header';
import {Study} from './components/Study';
import {Certificados} from './components/Certificados';
import { Contato } from './components/Contato';
import { Experiencias } from './components/Experiencias';

function App() {

  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Study />
      <Certificados />
      <Experiencias />
      <Contato/>
    </div>
  );
}

export default App;
