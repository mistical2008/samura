import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({
  usersCount,
  usersPerPage,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(usersCount / usersPerPage);
  return (
    <ul className={s.pagination}>
      {[...Array(pagesCount)].map((_, index) => {
        let number = index + 1;
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
                onPageChanged(number);
              }}
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
