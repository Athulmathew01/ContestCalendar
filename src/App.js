import './App.css';
import React from 'react';
import BasicCalendar from './Components/BasicCalendar';
import MainContainer from './Styles/AppStyle';
import Search from './Components/Search';
import { SearchProvider } from './Components/Context';


function App() {  
    
  return (

  <MainContainer>
    <SearchProvider>
    <div className='Main-wrapper'>

      <nav className='nav-bar'> <a href='/'>C<span>ontest</span>C<span>alendar</span></a>
        <Search />
      </nav>
      <BasicCalendar/>
  
    </div>
    </SearchProvider>
  </MainContainer>

  );
}

export default App;
