import logo from './logo.svg';
import './App.css';
import Multiplier from "./Components/Multiplier";
import EvenClicks from "./Components/EvenClicks";
import CountBy from "./Components/CountBy";
import HideMe from "./Components/HideMe";

function App() {
  return (
    <div>
        <center>
        <p className="quiz-numbers">1) </p>
        <Multiplier x={ 5 } y={ 7 } />
        <p className="quiz-numbers">2) </p>
        <EvenClicks />
        <p className="quiz-numbers">3)</p>
        <CountBy step={ 5 } />
        <p className="quiz-numbers">4)</p>
        <HideMe>Blah blah blah</HideMe> 
      </center>
    </div>
  );
}

export default App;
