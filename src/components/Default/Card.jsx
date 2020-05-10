import React from "react";

/**
 * * ROUTES
 */
import { Link } from "react-router-dom";

const Card = ({ title, date, desc }) => {
  return (
    <div class="card offer">
      <div class="card-body">
        <h5
          class="card-title"
          style={{
            fontWeight: "bold",
          }}
        >
          <Link to={`/offre-emploi/${title}`}>{title}</Link>
        </h5>
        <br />
        <h6 class="card-subtitle pt-1 mb-2 text-muted float-left">{date}</h6>

        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
