import React from "react";
import { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Filter from "../components/Filter";
import Layout from "./Layout";

function Pocket() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [task, setTask] = useState({ name: "", completed: false });

  const addTask = () => {
    if (!task.name.trim()) return;
    const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
    setTask({ id: "", name: "", completed: false });
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Pocket To-do List</h1>
      <div className="mb-4">
        <p className="mb-2 text-center">New task</p>
        <Input
          value={task.name}
          placeholder="Write your task"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="mb-3"
        />
        <Button onClick={addTask} className="w-full">
          Add
        </Button>
      </div>
      <Filter tasks={tasks} onToggle={toggleTask} />
    </Layout>
  );
}

export default Pocket;
