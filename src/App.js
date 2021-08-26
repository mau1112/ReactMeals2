import React from "react";
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main'
import {CartContextProvider} from './Components/Context/CartCtx'
function App() {
  return (
    
    <CartContextProvider>
    <Header></Header>
    <Main>
      <h2>Let's get started!</h2>
    </Main>
    </CartContextProvider>
  );
}

export default App;
