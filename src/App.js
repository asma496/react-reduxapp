import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Counterinput from './componenet/Counterinput';
import Counteroutput from './componenet/Counteroutput';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Counteroutput />
        <Counterinput />

      </Provider>

</div>
  );
}

export default App;
