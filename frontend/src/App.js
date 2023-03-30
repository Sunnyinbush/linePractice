import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Userinput from './startGame/userinput';
import Userinput2 from './expressMode/userinput2.js';
import Line from './Line/Line';
import Urchoice from './startGame/urchoice';
import Urchoice2 from './startGame/urchoice2';
import Game from './expressMode/game';

// const liff = window.liff;


export default function App() {
  return (
    <div>
       <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Line />
            </Route>
            <Route path="/userinput" >
              <Userinput  />
              <Userinput />
            </Route>
            <Route path="/userinput2">
              <Userinput2 />
            </Route>
            <Route path="/urchoice">
              <Urchoice />
            </Route>
            <Route path="/urchoice2">
              <Urchoice2 />
            </Route>
            <Route path="/game">
              <Game/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
