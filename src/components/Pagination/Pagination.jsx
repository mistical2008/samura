import React, {setState} from "react";
import s from "./Pagination.module.css";

const Pagination = ({
  usersCount,
  usersPerPage,
  currentPage,
  onPageChanged,
  sectionSize = 10,
}) => {
  let pagesCount = Math.ceil(usersCount / usersPerPage);
  const pagesArr = [...Array(pagesCount)].map((_,index) => index + 1 );
  let sectionsCount = pagesCount / sectionSize;
  const [currentSect, setCurrentSect] = setState(1);
  let minSectionPage = (currentSect - 1) * sectionSize - 1;
  let maxSectionPage = currentSect * sectionSize;
  return (
    <>
      { currentSect > 1 &&
       <button onClick={() => setCurrentSect(currentSect - 1)} value="PREV"/> 
      }
      <ul className={s.pagination}>
        // TODO: refactor array with undefined values to array with numbers.
        {pagesArr
          .filter((page) => {
            return page > minSectionPage && page < maxSectionPage;
          })
          .map((_, index) => {
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
      { sectionsCount > currentSect &&
       <button onClick={() => setCurrentSect(currentSect + 1)} value="NEXT"/> 
      }
    </>
  );
};

export default Pagination;
