import React, { useState } from "react";

export default function Paginado({ currentPage, setCurrentPage, maximo }) {
  const [input, setInput] = useState(1);
  let max = Math.floor(maximo);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(parseInt(currentPage) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setCurrentPage(parseInt(e.target.value));

      if (
        e.target.value === "0" ||
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.floor(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <button
        disabled={currentPage === 1 || currentPage < 1}
        onClick={previousPage}
      >
        Prev
      </button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> de {max} </p>
      <button
        disabled={currentPage === max || currentPage > max}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}
