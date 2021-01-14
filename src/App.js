import React from 'react';
import './App.css';
import Intervalo from './componente/Intervalo';
import Media from './componente/Media';
import Soma from './componente/Soma';
import Sorteio from './componente/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

/* Implementação simples
function App() {

  const [min, setMin] = useState(0); 
  const [max, setMax] = useState(0);

  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="linha">
        <Intervalo onMinChange={setMin} onMaxChange={setMax} />
        <Intervalo onMinChange={setMin} onMaxChange={setMax} />
      </div>
      <div className="linha">
        <Media min={min} max={max}/>
        <Soma min={min} max={max}/>
        <Sorteio min={min} max={max}/>
      </div>
    </div>
  );
} */

export default App;
