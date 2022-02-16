
import './App.css';
import styled from "styled-components"
import Home from './Components/Home';
import { AppContextProvider, useGlobalContext } from './Components/Context';

function App() {
  return (
    <AppContextProvider>
    <AppContainer>
        <Home></Home>
    </AppContainer>
    </AppContextProvider>
  );
}

export {AppContainer}
export default App;

 const AppContainer = styled.div`
    font-family: 'Ubuntu', sans-serif;
    background-color: #D6DBDF;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
 `






