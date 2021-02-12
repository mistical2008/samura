import React, { useState } from "react";
import s from "./Pagination.module.css";

const Pagination = ({
  usersCount,
  usersPerPage,
  currentPage,
  currentSection,
  onPageChanged,
  sectionSize = 10,
}) => {
  let pagesCount = Math.ceil(usersCount / usersPerPage);
  let pagesArr = [...Array(pagesCount)].map((_, index) => index + 1);
  let sectionsCount = Math.ceil(pagesCount / sectionSize);
  let [currentSect, setCurrentSect] = useState(currentSection);
  let minSectionPage = (currentSect - 1) * sectionSize + 1;
  let maxSectionPage = currentSect * sectionSize;
  return (
    <div className={s.pagination}>
      {currentSect > 1 && (
        <button
          onClick={() => {
            setCurrentSect(currentSect - 1);
          }}
        >
          PREV
        </button>
      )}
      <ul className={s.pagesNumbers}>
        {pagesArr
          .filter((page) => page >= minSectionPage && page <= maxSectionPage)
          .map((number) => {
            return (
              <li
                className={
                  (number === currentPage && s.paginationActiveItem) +
                  " " +
                  s.paginationItem
                }
              >
                <button
                  onClick={(e) => {
                    onPageChanged(number, currentSect);
                  }}
                >
                  {number}
                </button>
              </li>
            );
          })}
      </ul>
      {sectionsCount > currentSect && (
        <button onClick={() => setCurrentSect(currentSect + 1)}>NEXT</button>
      )}
    </div>
  );
};

export default Pagination;
