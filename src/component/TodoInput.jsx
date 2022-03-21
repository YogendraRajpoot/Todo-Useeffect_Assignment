import React, { useEffect, useState } from "react";

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
          if( task!==""){
            handleadd(task);          
            setTask("");
          }else{ 
            alert("Enter Todo's")
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
