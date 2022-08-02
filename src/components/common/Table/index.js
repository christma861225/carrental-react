import React from "react";
import "./index.scss";

const Table = ({ rows, cols, renderRow, selectRow, onClickRow }) => {
  return (
    <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            {cols.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <React.Fragment key={index}>
                {renderRow(row, onClickRow, selectRow === row.no)}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
