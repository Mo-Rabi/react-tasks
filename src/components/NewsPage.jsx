// Products.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../";
import NewsCard from "./NewsCard";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=65d5b96e284d4cc49662aa160177111f"
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // Call the getData function when the component mounts
    getData();
  }, []);

  return (
    <div className="container">
      <section className="mx-auto my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
