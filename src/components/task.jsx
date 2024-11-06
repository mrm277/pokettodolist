import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onToggle }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
    console.log("Task checked", checked);
  };

  const onDelete = (id) => {
    console.log("Task deleted", id);
    localStorage.getItem("tasks")
      ? localStorage.setItem(
          "tasks",
          JSON.stringify(
            JSON.parse(localStorage.getItem("tasks")).filter(
              (task) => task.id !== id
            )
          )
        )
      : null;
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2">
      <div className="flex items-center">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span
          className={`flex items-center gap-2 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.name}
        </span>
      </div>
      <div
        className="bg-gray-300 hover:bg-red-400 px-2 py-1 rounded-md"
        onClick={() => onDelete(task.id)}
      >
        <FontAwesomeIcon className="text-white" icon={faTrashCan} />
      </div>
    </div>
  );
};

export default Task;
