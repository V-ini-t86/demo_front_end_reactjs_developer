import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import StartPageSignIn from "./components/StartPage/StartPageSignIn";
import Home from "./components/Home/Home";
import Setting from "./components/Setting/Setting";
import Profile from "./components/Profile/Profile";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={Explore} path="/explore" />
          <Route component={Profile} path="/profile" />
          <Route component={Setting} path="/setting" />
          <Route component={Home} path="/home" />
          <Route component={StartPageSignIn} path="/signin" />
          <Route component={StartPage} path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
