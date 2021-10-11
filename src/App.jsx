import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
// import Banner from './components/Banner'
import Hero from './components/Hero';
import Home from './components/Home';
// import Bootstrap from './components/Bootstrap';



function App() {
  return (
    <div className='app' style={{fontSize:'16px'}} >
      <Router>
        <Header/>
        {/* <Bootstrap/> */}
        
        <Switch>
          <Route>
            <Hero/>
            <Home/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
