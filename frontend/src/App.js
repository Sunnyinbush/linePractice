
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Userinput from './game/userinput';

function App() {
  return (

    <Router>
          <div className="App">


        <Userinput/>

       </div>


    </Router>

  );
}

export default App;
