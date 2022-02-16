import React from 'react'
import Overview from './Overview';
import { useGlobalContext } from './Context';
import styled  from 'styled-components';
import AddTransaction from './AddTransaction';
import Records from './Records';


const Home = () => {
  const { isModalOpen, openModal } = useGlobalContext();
    
  const addTrans = () => {
      openModal();
  }
  return ( 
    <HomeContainer>
         <Header>
           <h1>X-PAINS</h1>
           {/* <p>Track your expenses...</p> */}
        </Header>
        <Overview></Overview>
        <button className="add" onClick={ addTrans}>ADD TRANSACTION</button>
        {isModalOpen && <AddTransaction/>}
        <Records/>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
`