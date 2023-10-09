// ProductCard.js
import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={article.urlToImage || "https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"}
          className="card-img-top"
          alt="Article Image"
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{article.title}</h5>
          <p className="card-text">
            <i className="far fa-clock pe-2"></i>{article.publishedAt}
          </p>
          <p className="card-text collapse" id={`collapseContent${article.title}`}>
            {article.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <a
              className="btn btn-link link-danger p-md-1"
              data-mdb-toggle="collapse"
              href={`#collapseContent${article.title}`}
              role="button"
              aria-expanded="false"
              aria-controls={`collapseContent${article.title}`}
            >
              Read more
            </a>
            <div>
              <i
                className="fas fa-share-alt text-muted p-md-1 me-2"
                data-mdb-toggle="tooltip"
                data-mdb-placement="top"
                title="Share this post"
              ></i>
              <i
                className="fas fa-heart text-muted p-md-1 me-0"
                data-mdb-toggle="tooltip"
                data-mdb-placement="top"
                title="I like it"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
