import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Drills from "./components/Drills.jsx"
import PlayButton from "./components/PlayButton.jsx"
import ThreeScene from "./components/ThreeScene.jsx"
import { Button } from "@material-ui/core"
import Home from "./Home.js"
import About from "./About.js"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="App">
        <ResponsiveDrawer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
