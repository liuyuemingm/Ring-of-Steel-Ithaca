import Accordion from "./components/Accordion"
import react from "react"
import GlossaryCard from "./components/GlossaryCard.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"
import ThreeScene from "./components/ThreeScene.jsx"

function Syllabus() {
  const clickHandler = () => {
    console.log(this)

  }
  return (
    <>
      <ResponsiveDrawer>
        <Accordion />
      </ResponsiveDrawer>
      <Footer />
    </>
  );
}

export default Syllabus;
