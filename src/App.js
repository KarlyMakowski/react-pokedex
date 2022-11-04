import './App.css';
import { Topbar } from './components/Topbar';
import { PokeList } from './components/PokeList';
import { Bottombar } from './components/Bottombar';

function App() {
  return (
    <>
      <Topbar />
      <PokeList />
      <Bottombar />
    </>
  );
}

export default App;
