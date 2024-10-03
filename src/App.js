
import './App.css';
import Car from './components/Car';
import { Header } from './components/Header';
import {Hello, HelloPerson, HelloQTeo} from './components/Hello';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Hello />
      <HelloPerson name="Quang Teo"  />
      <Header />
      <HelloQTeo />
      <Car/>
      <Login />
    </div>
  );
}

export default App;
