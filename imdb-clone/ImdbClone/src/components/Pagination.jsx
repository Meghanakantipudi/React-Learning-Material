import React from "react";

function Pagination({ page, updatePageNumber }) {
  return (
    <div className="flex flex-row flex-wrap bg-gray-400 w-full justify-center items-center m-5 p-5">
      <div>
        <button className="hover:cursor-pointer hover:scale-150 duration-200" onClick={() => {
            updatePageNumber(page - 1);
        }}>
          <i className="fa-solid fa-arrow-left px-5"></i>
        </button>
      </div>
      <div className="font-white font-bold">{page}</div>
      <div className="hover:cursor-pointer hover:scale-150 duration-200">
        <button onClick={() => {
            updatePageNumber(page + 1);
        }}>
          <i className="fa-solid fa-arrow-right px-5"></i>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
