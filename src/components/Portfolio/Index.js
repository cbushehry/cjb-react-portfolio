import ImagePortfolio from "../../assets/images/portfolio.png"; 
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
        title: "Note Taker",
        technology: "HTML/CSS",
        image: "note-taker.jpg",
        description: "Application that allows the user to write & save notes",
        url: "https://note-taker-cbushehry.herokuapp.com/",
    },
    {
        title: "Note Taker",
        technology: "HTML/CSS",
        image: "note-taker.jpg",
        description: "Application that allows the user to write & save notes",
        url: "https://note-taker-cbushehry.herokuapp.com/",
    },
    {
        title: "Note Taker",
        technology: "HTML/CSS",
        image: "note-taker.jpg",
        description: "Application that allows the user to write & save notes",
        url: "https://note-taker-cbushehry.herokuapp.com/",
    },
    {
        title: "Budget Tracker P.W.A.",
        technology: "Javascript/HTML/CSS",
        image: "budget-tracker.jpg",
        description: "Project Description",
        url: "https://budget-tracker-cjb.herokuapp.com/",
    },
    {
        title: "Web API Quiz",
        technology: "Javascript/CSS/LocalStorage",
        image: "web-api-quiz.jpg",
        description: "Project Description",
        url: "https://cbushehry.github.io/js.web-api-quiz/",
    },
    {
        title: "Work Day Scheduler",
        technology: "HTML",
        image: "work-day-scheduler.jpg",
        description: "Application to help the user schedule their day",
        url: "https://cbushehry.github.io/work-day-scheduler/",
    },
  ];

  return (
    <section>
      <div className="page-body">
        <img src={ImagePortfolio} alt="Portfolio" className="img-body" />
        <h1>Portfolio</h1>
        <div className="portfolio">
          {portfolioItems.map((item, index) => (
            <PortfolioItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;