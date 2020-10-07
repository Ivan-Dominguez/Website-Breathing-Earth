import React from 'react';
import  {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    
  )
}

export default App;
