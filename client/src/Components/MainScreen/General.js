import axios from "axios";
import React, { useEffect, useState } from "react";

const General = ({ myCategory }) => {
  const [newsArray, setNewsArray] = useState([]);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${myCategory}&apiKey=${process.env.REACT_APP_API_KEY}`
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
      {newsArray.length > 0 ? (
        newsArray?.map((item, index) => {
          return (
            <div className="contentGen" key={`nesw_${index + 1}`}>
              <img
                className="imgSGen"
                src={
                  item?.urlToImage ||
                  "https://as1.ftcdn.net/v2/jpg/02/35/35/40/1000_F_235354051_yz3envzxnH9dulycguP6l4Bh3Xx0BPZ0.jpg"
                }
                alt="pic"
              ></img>
              <div className="sub-headings">
                <h3 key={item.id}>{item.title}</h3>
                <a href={item?.url} className="source">
                  {item?.source?.name}{" "}
                </a>
                <span>
                  | {new Date(item?.publishedAt).toLocaleDateString()}
                </span>
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
        })
      ) : (
        <>
          <img
            className="imgSGen"
            src="https://img.freepik.com/premium-vector/no-data-empty-data-concept-illustration-vector_610956-1400.jpg?w=1480"
            alt="pic"
          />
        </>
      )}
    </>
  );
};
export default General;
