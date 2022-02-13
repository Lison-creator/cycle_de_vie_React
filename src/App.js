
import './App.css';
import { useEffect, useState } from 'react';
import Horloge from './components/horloge/horloge';
import DateDuJour from './components/dateDuJour/dateDuJour';

function App() {


  const [displayHorloge, setDisplayHorloge] = useState(true);
  const [displayDate, setDisplayDate] = useState(false);
  console.log("display horloge : " + displayHorloge);
  console.log("display date : " + displayDate);

  /* Bouton pour afficher l'horloge */
  const handleHorlogeDisplay = () => {
    setDisplayHorloge(d => !d);
    setDisplayDate(d => !d);
  }

  /* Bouton pour afficher la date du jour */
  const handleDateDisplay = () => {
    setDisplayDate(d => !d);
    setDisplayHorloge(d => !d);
  }


  return (
    <div className="App">

      {displayHorloge && (
        <>
          <Horloge />
          <button onClick={handleDateDisplay}>Voir le jour</button>
        </>
      )}
      {displayDate && (
        <>
          <DateDuJour />
          <button onClick={handleHorlogeDisplay}>Voir l'heure</button>
        </>
      )}
      <footer>©LisonFerné | 2022</footer>




    </div>
  );
}

export default App;
