import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import MyCart from './Components/MyCart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <div className="app">

      <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path='/home' render={props => <Home {...props}/> }/>
          <Route path='/my-cart' render={props => <MyCart {...props}/> }/>


          {/* <Route path="/home">
            <Home />
          </Route> */}
        </Switch>
        
      </Router>
    </div>

  );
}

export default App;
