import React, { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid";

export const TodoInput = ({ data, setData,page}) => {
  const [task, setTask] = useState("");
  

  useEffect(() => { 
    getTodo();
  }, [page]);

  const getTodo = () => {
    fetch(`http://localhost:3001/Todo?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  const handleadd = (task) => { 
    const onload = {
      Title: task,
      status: false,
      // id: uuid(),
    };

    fetch("http://localhost:3001/Todo", {
      method: "Post",
      body: JSON.stringify(onload),
      headers: { "content-type": "application/json" },
    }).then((res) => {
      getTodo();
    });
  };

  return (
    <div>
      <h3>TodoInput</h3>
      <input
        placeholder="Write Todo Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
            handleadd(task);          
            setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};
