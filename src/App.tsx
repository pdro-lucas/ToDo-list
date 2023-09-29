import { PlusCircle } from 'phosphor-react';

import { Header } from './Components/Header';
import { Input } from './Components/Input';

import './App.module.css';
import { Button } from './Components/Button';

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Input placeholder="Adicione uma nova tarefa" type="text" />
          <Button>
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </Button>
        </div>
      </main>
    </>
  );
}

export default App;
