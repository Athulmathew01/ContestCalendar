import './App.css';
import React from 'react';
import BasicCalendar from './Components/BasicCalendar';
import MainContainer from './Styles/AppStyle';
import Search from './Components/Search';
import { SearchProvider } from './Components/Context';
// import Notified from './Components/Notified';

function App() {  
    
  return (

  <MainContainer>
    <div className='Main-wrapper'>

      <SearchProvider>
        <nav className='nav-bar'> 
          <a id='big-title' href='/ContestCalendar' title='ContestCaledar'>C<span>ontest</span>C<span>alendar</span></a>
          <a id='small-title' href='/ContestCalendar' title='ContestCaledar'>C<span>C</span></a>
          <Search />
          {/* <Notified/> */}
        </nav>
        <BasicCalendar/>
  
      </SearchProvider>
    </div>
  </MainContainer>

  );
}

export default App;
