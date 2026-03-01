import { useState } from 'react';
import { PhaserGame } from './PhaserGame';
import { generateMonster } from './services/api';
import './App.css';

export default function App() {
  const [monster, setMonster] = useState<{name:string, hp:number, damage:number} | null>(null);

  const handleGenerate = async () => {
    const data = await generateMonster('seed-123');
    setMonster(data);
  };

  return (
    <div className="app">
      <PhaserGame />
      <div className="ui-panel">
        <button onClick={handleGenerate}>Generate Monster</button>
        {monster && (
          <div className="monster-info">
            <h3>{monster.name}</h3>
            <p>HP: {monster.hp}</p>
            <p>Damage: {monster.damage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
