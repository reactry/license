import './App.css';
import Licences from './Licences';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-400 text-white p-4 text-center">
        <p className="text-2xl py-12">
          Hallo Welt.
        </p>
        <Licences.MIT />
      </header>
    </div>
  );
}

export default App;
