import React from "react";
import "./all-news-posts.scss";

import NewsCard from "../../../NewsCard/NewsCard";

const AllNewsPosts = ({ data }) => {
  return (
    <div className="all-news-posts">
      <div className="container all-news-posts__container">
        {data.map((post, index) => (
          <NewsCard data={data[index].node} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllNewsPosts;
