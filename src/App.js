import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Drills from "./components/Drills.jsx"
import PlayButton from "./components/PlayButton.jsx"
import ThreeScene from "./components/ThreeScene.jsx"
import { Button } from "@material-ui/core"

function App() {
  // onClick = () => {
  //   console.log(this.threeScene)
  // }
  return (
    <>
      <Header />
      {/* <Drills /> */}
      <ThreeScene />

      <Button
        style={{
          position: 'absolute',
          bottom: '20vh',
          left: '40vw',
          background: 'purple'
        }}>click me</Button>
      <Footer />
    </>
  );
}

export default App;
