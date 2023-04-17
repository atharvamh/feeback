import { useState, useEffect } from "react";
import './App.css'
import HelloBanner from './components/helloBanner'
import Questionnarie from "./components/questionnaire";

function App() {
  const [showHelloBanner, setShowHelloBanner] = useState<boolean>(true);

  useEffect(() => {
  },[]);

  return (
    <div className="App">
      {
        showHelloBanner ? <HelloBanner setShowHelloBanner={setShowHelloBanner} /> : 
          <Questionnarie />
      }
    </div>
  )
}

export default App
