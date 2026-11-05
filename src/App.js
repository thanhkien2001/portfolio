import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {LanguageProvider} from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}

export default App;
