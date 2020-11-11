import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/project" component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
