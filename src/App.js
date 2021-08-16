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
import Weapons from "./Weapons.js"
import Syllabus from "./Syllabus.js"

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/weapons" exact component={Weapons} />
          <Route path="/syllabus" exact component={Syllabus} />

        </Switch>

      </div>
    </Router>

  );
}

export default App;
