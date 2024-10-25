import React from 'react';
import * as S from './styles/App'
import { Logo } from './componenst/Logo/Logo';
import { Main } from './componenst/Main/Main';
import { Footer } from './componenst/Footer/Footer';


function App() {
  return (
    <S.appContainer>
      <Logo/>
      <Main/>
      <Footer/>
    </S.appContainer>
  );
}

export default App;
