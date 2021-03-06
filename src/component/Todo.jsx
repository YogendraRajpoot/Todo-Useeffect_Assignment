import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <>
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <TodoInput data={data} setData={setData} page={page} />
        <TodoList data={data} setPage={setPage} page={page} setData={setData} />
      </div>
    </>
  );
};
