import { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import Portafolio from "./components/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  return (
    <>
      <header>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <main>
        {currentPage === "About Me" && <About />}
        {currentPage === "Contact Me" && <ContactMe />}
      </main>
      <footer>@cbushehry</footer>
    </>
  );
}

export default App;
