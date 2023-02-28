import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";

const Pagination = ({ currentPage, cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];
  for (var i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onRight = () => {
    if (currentPage === Math.ceil(totalCards / cardsPerPage)) return;
    paginate(currentPage + 1);
  };

  const onLeft = () => {
    if (currentPage <= 1) return;
    paginate(currentPage - 1);
  };

  return (
    <div className="mx-auto mb-5 mt-3" style={{ display: "inline-block" }}>
      <div className="pagination">
        <div
          className={`arrow ${currentPage <= 1 ? "disabled" : ""}`}
          onClick={() => onLeft()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <p>
          {currentPage} of {Math.ceil(totalCards / cardsPerPage)}
        </p>
        <div
          className={`arrow ${
            currentPage === Math.ceil(totalCards / cardsPerPage)
              ? "disabled"
              : ""
          }`}
          onClick={() => onRight()}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
