import React from "react";
import Task from "./task.jsx";

const List = ({ tasks, wannastate, onToggle, search }) => {
  if (search) {
    tasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filterTasks = (tasks, wannastate) => {
    switch (wannastate) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        console.log(
          "completed",
          tasks.filter((task) => task.completed)
        );
        return tasks.filter((task) => task.completed);
      case "all":
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks, wannastate);

  return (
    <div>
      <ul>
        {filteredTasks.map((task, index) => (
          <Task key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
};

export default List;
