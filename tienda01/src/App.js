import { useState } from "react";
import "./App.css";

//Componentes
import Header from "./components/Header";
import ResultList from "./components/ResultList";

function App() {
  const [word, setWord] = useState("");
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <img src="/images/logo_corebiz.png" alt="logo_corebiz" style={{height:'55px'}}></img>
        <Header setWord={setWord} />
      </div>
      <div>
        <img src="/images/banner.png" alt="banner" style={{width:'100%'}}></img>
      </div>
      <ResultList word={word} />
    </div>
  );
}

export default App;
