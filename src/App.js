import Home from "./Home.js"
import About from "./About.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Weapons from "./Weapons.js"
import Syllabus from "./Syllabus.js"
import Glossary from "./Glossary.js"
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Footer from "./components/Footer.jsx"

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#252525',
      dark: '#252525',
      contrastText: '#C08FFF'
    },
    secondary: {
      main: '#7000ff',
      dark: '#252525',
    },
  },
});

function App() {

  return (

    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/weapons" exact component={Weapons} />
            <Route path="/glossary" exact component={Glossary} />
            <Route path="/syllabus" exact component={Syllabus} />

          </Switch>
        </ThemeProvider>
      </div>

    </Router>

  );
}

export default App;
