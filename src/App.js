import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Drills from "./components/Drills.jsx"
import PlayButton from "./components/PlayButton.jsx"
import ThreeScene from "./components/ThreeScene.jsx"
import { Button } from "@material-ui/core"

function App() {
  const clickHandler = () => {
    console.log(this)

  }
  return (
    <>
      <Header />
      {/* <Drills /> */}
      <ThreeScene />
      <PlayButton />
      <Footer />
    </>
  );
}

export default App;
