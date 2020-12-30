import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
