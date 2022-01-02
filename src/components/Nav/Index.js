import { useEffect } from "react"; 
import AboutMeImage from "../../assets/images/about-me.png";
import ContactMeImage from "../../assets/images/contact-me.png";
import Logo from "../../assets/images/logo.png";
import PortfolioImage from "../../assets/images/portfolio.png";
import ResumeImage from "../../assets/images/resume.png";

const Nav = ({ currentPage, setCurrentPage }) => {
    useEffect(() => {
      document.title = `${currentPage}`;
    }, [currentPage]);

    const handlerOpenResume = () => {
        window.open(
          " ",
          "_blank"
        );
      };

  return (
    <>
      <div className="header-logo">
        <img src={Logo} className="img-logo" alt="logo" />
        <h1>Cameron Bushehry</h1>
      </div>
      <nav>
        <div className="nav-item" onClick={() => setCurrentPage("About Me")}>
          <img src={AboutMeImage} className="img-nav" alt="about-me" />
          About Me
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Portfolio")}>
          <img src={PortfolioImage} className="img-nav" alt="portfolio" />
          Portfolio
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Contact Me")}>
          <img src={ContactMeImage} className="img-nav" alt="contact-me" />
          Contact Me
        </div>
        <div className="nav-item" onClick={handlerOpenResume}>
          <img src={ResumeImage} className="img-nav" alt="resume" />
          Resume
        </div>
      </nav>
    </>
  );
};

export default Nav;