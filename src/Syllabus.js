import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import ThreeScene from "./components/ThreeScene.jsx"

function Syllabus() {
  const clickHandler = () => {
    console.log(this)

  }
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Syllabus;
