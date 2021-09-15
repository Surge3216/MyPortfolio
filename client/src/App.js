import NavBar from "./componets/Navbar";
import TypeAnimation from "./componets/footer";
import Home from './pages/home';
import NewProject from "./pages/newproject";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/newProject" component={NewProject}/>
      <TypeAnimation/>
      </Router>      
    </div>
  );
}

export default App;
