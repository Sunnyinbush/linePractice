import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Userinput from './game/userinput';

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


        <Userinput/>



       </div>


    </Router>

  );
}
}

export default App;
