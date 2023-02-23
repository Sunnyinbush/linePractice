import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React, { Component } from 'react';
import Userinput from './game/userinput';
import Userinput2 from './game/userinput2';
import Line from './Line/Line';
import Urchoice from './game/urchoice';
import Urchoice2 from './game/urchoice2';

const liff = window.liff;


class App extends Component {
  

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     userLineID: '',
  //     pictureUrl: '',
  //     users:[]
  //   };
  // }

  
  
  // componentDidMount = async () => {
  //   await liff.init({ liffId: `1657931960-VynB8GvL` }).catch(err => { throw err });
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     let user = {
  //       name: getProfile.displayName,
  //       userLineID: getProfile.userId,
  //       pictureUrl: getProfile.pictureUrl,
  //     };
  
  //     if (!this.state.users.find(u => u.userLineID === user.userLineID)) {
  //       this.setState(prevState => ({
  //         users: [...prevState.users, user]
  //       }));
  //     };
  //   } else {
  //     liff.login();
  //   }
  
  // }
  

  render() {

    const date1= new Date(Date.now());
    const gameID = date1.valueOf()
    console.log(gameID)

  return (

    <Router>
      <div className="App">
      {/* <Line name={this.state.name} userLineID={this.state.userLineID} pictureUrl={this.state.pictureUrl} /> */}


      <Switch>
        <Route exact path="/">
        {/* {this.state.users.map(user => {

          return <Line name={user.name} userLineID={user.userLineID} pictureUrl={user.pictureUrl} />
        })} */}
          <Line/>
        </Route>
        <Route path="/userinput">
          <Userinput />
        </Route>
        <Route path ="/userinput2">
          <Userinput2/>
        </Route>
        <Route path = '/urchoice'>
          <Urchoice/>
        </Route>
        <Route path = '/urchoice2'>
          <Urchoice2/>
        </Route>
        
        
   
      </Switch>


       </div>
    </Router>

  );
}
}

export default App;
