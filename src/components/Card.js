import React from "react";
import "../Styles/Card.css";
function Card({ iamgeUrl, title, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={iamgeUrl} alt="movie-pict" />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-body">{body}</div>
      </div>

      <div className="btn">
        <button>
          <a href="/kis">View More</a>
        </button>
      </div>
    </div>
  );
}
export default Card;
