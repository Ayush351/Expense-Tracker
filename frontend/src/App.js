import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import Transaction from './Components/Transaction/Transaction';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: linear-gradient(135deg, rgba(252, 246, 249, 0.78), rgba(255, 255, 255, 0.9));
    border: 3px solid #DED7F1; /* Changed border color to a blue shade */
    border-radius: 20px; /* Reduced border-radius for a smoother look */
    overflow-x: hidden;
    backdrop-filter: blur(8px); /* Increased blur effect */
    -webkit-backdrop-filter: blur(8px); /* Added for cross-browser compatibility */
}

main::-webkit-scrollbar {
    width: 0;
    background: transparent; /* Removed scrollbar */
}

`;

export default App;