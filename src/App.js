import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Router>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      </Router>
    </>
  )

  
}


export default App;
