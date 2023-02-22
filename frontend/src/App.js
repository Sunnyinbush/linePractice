import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React, { Component } from 'react';
import Userinput from './game/userinput';
import Line from './Line/Line';
import { useHistory } from 'react-router-dom';

const liff = window.liff;


class App extends Component {
  

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     userLineID: '',
  //     pictureUrl: ''
  //   };
  // }

  
  // componentDidMount = async () => {
  //   await liff.init({ liffId: `1657931960-VynB8GvL` }).catch(err => { throw err });
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     this.setState({
  //       name: getProfile.displayName,
  //       userLineID: getProfile.userId,
  //       pictureUrl: getProfile.pictureUrl,
  //     });
  //   } else {
  //     liff.login();
  //   }
  // }
    

  render() {

  return (

    <Router>
      <div className="App">
      {/* <Line name={this.state.name} userLineID={this.state.userLineID} pictureUrl={this.state.pictureUrl} />
       */}
        <Userinput/>
       <Switch>
        <Route path="/userinput">
          <Userinput/>
        </Route>
       </Switch>

       </div>
    </Router>

  );
}
}

export default App;
