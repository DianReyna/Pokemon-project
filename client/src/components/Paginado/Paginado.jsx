import React, { useState } from "react";
import "./PaginadoCss.css";
export default function Paginado({ currentPage, setCurrentPage, maximo }) {
  const [input, setInput] = useState(1);
  let max = Math.ceil(maximo);

  if (input !== currentPage) {
    setInput(parseInt(currentPage));
  }

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
        parseInt(e.target.value) > Math.ceil(maximo) ||
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
    <div className="container_pag">
      <div>
        <button
          className="btn_prev"
          disabled={currentPage === 1 || currentPage < 1}
          onClick={previousPage}
        >
          «
        </button>
      </div>

      <div>
        <input
          className="input"
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="page"
          autoComplete="off"
          value={input}
        />
      </div>

      <div>
        <p className="pmax"> de {max} </p>
      </div>

      <div>
        <button
          className="btn_next"
          disabled={currentPage === max || currentPage > max}
          onClick={nextPage}
        >
          »
        </button>
      </div>
    </div>
  );
}
