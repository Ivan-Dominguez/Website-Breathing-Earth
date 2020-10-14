import React from 'react';
import  {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App;
