import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Userinput from './game/userinput';
import Userinput2 from './game/userinput2';
import Line from './Line/Line';
import Urchoice from './game/urchoice';
import Urchoice2 from './game/urchoice2';
import Game from './game';

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: '',
      users: [],
    };
  }

  componentDidMount = async () => {
    await liff.init({ liffId: this.props.liffId }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      console.log(getProfile)
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
    } else {
      liff.login();
    }
  };


  render() {


    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Line
                liffId="1657442367-op7nlxeV"
                name={this.state.name}
                serLineID={this.state.userLineID}
                pictureUrl={this.state.pictureUrl}
              />
            </Route>
            <Route path="/userinput">
              <Userinput  />
            </Route>
            <Route path="/userinput2">
              <Userinput2 />
            </Route>
            <Route path="/urchoice">
              <Urchoice liffId="1657442367-kRXYxNW6"/>
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
    );
  }
}

export default App;
