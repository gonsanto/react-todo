import './App.css';
import Interface from './components/Interface/Interface.tsx';
import { constants } from './constants.tsx';
const { mainClassName } = constants;

const App = () => {
  return (
    <main className={mainClassName}>
      <Interface />
    </main>
  );
};

export default App;
