import { Typography } from "@material-ui/core"
import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import ThreeScene from "./components/ThreeScene.jsx"

function Home() {
  const clickHandler = () => {
    console.log(this)

  }
  return (
    <>
      <Typography style={{ position: "absolute", left: '300px', top: '200px' }}>
        Home Home Home Home Home Home Home Home Home Home Home Home
        Home Home Home Home Home Home Home Home Home Home Home Home
        Home Home Home Home Home Home Home Home Home Home Home Home
        Home Home Home Home Home Home Home Home Home Home Home Home
      </Typography>
    </>
  );
}

export default Home;
