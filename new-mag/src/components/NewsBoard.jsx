import { useState, useEffect } from "react";
import NewItem from "./NewItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e4f862cd06604f858631a09cc0306739`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewItem
          key={index}
          title={news.title}
          desc={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;

