import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Filtered from './filtered';

function App() {
  return (

    <Router>
          <div className="App">


        <Filtered/>

       </div>


    </Router>

  );
}

export default App;
