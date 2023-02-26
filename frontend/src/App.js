import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Userinput from './game/userinput';
import Userinput2 from './game/userinput2';
import Line from './Line/Line';
import Urchoice from './game/urchoice';
import Urchoice2 from './game/urchoice2';
import Game from './game';

// const liff = window.liff;

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     userLineID: '',
  //     pictureUrl: '',
  //     lineLiffId: '1657442367-op7nlxeV`',
  //     gameLiffId: '1657442367-JL8n6BYl',
  //   };
  // }

  // componentDidMount = async() => {
  //   await liff.init({ liffId: this.state.lineLiffId }).catch(err=>{throw err});
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     this.setState({
  //       name: getProfile.displayName,
  //       userLineID: getProfile.userId,
  //       pictureUrl: getProfile.pictureUrl,
  //     });
  //   }else{
  //     liff.login();
  //   }
  // }





  render() {
    // const { lineLiffId, gameLiffId } = this.state;
    return (
      <Router>
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
