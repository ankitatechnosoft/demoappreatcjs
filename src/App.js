import React,{Component} from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import EditScreen from './components/EditScreen';

import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component{
  render(){
    return(
     <Router>
        <div>
        <Route exact path="/" component={LoginScreen}/>
        <Route path="/RegisterPage" component={RegisterPage}/>
         <Route path="/Home" component={Home}/>
        <Route path="/EditScreen" component={EditScreen}/> 
      </div>
     </Router>
    )
  }
}

export default App;