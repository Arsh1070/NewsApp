import axios from "axios";
import React, { useEffect, useState } from "react";

const General = ({ myCategory }) => {
  const [newsArray, setNewsArray] = useState([]);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${myCategory}&apiKey=5a9eb011fe414b3ab2171e0bcfa50a12`
      );
      setNewsArray(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [myCategory]);

  return (
    <>
      {newsArray?.map((item, index) => {
        return (
          <div className="contentGen" key={`nesw_${index + 1}`}>
            <img className="imgSGen" src={item.urlToImage} alt="pic"></img>
            <div className="sub-headings">
              <h3 key={item.id}>{item.title}</h3>
              <a href={item?.url} className="source">
                {item?.source?.name}{" "}
              </a>
              <span>| {new Date(item?.publishedAt).toLocaleDateString()}</span>
              <p className="description">
                {item.description}{" "}
                <span>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Read full article...
                  </a>
                </span>
              </p>
              {/*     <a href={item.url} target="_blank" rel="noreferrer">
                Continue to read...s
              </a> */}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default General;
