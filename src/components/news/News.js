import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
      );
      let data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>
      <div className="mainDiv">
        {mynews && mynews.length > 0 ? (
          mynews.map((ele, index) => (
            <div key={index} className="card" style={{ marginTop: "2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <img src={ele.urlToImage || "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.author || "Janelle Ash"}</h5>
                <p className="card-text">{ele.title}</p>
                <a href={ele.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default News;

