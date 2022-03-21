import React from "react";

export const TodoList = ({ data, setPage, page }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {data.map((item) => {
        return <div key={item.id}>{item.Title}</div>;
      })}

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)} disabled={data.length < 4}>
        Next
      </button>
    </div>
  );
};
