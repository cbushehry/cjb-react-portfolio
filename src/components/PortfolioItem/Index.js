const PortfolioItem = ({ item }) => {
    return (
      <div
        className="portfolio-item"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => window.open(item.url, "_blank")}
      >
        <h1>{item.title}</h1>
        <div className="item-description-container">
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  export default PortfolioItem;