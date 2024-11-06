import React, { useState } from "react";
import List from "./list.jsx";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./ui/input";

const Filter = ({ tasks, onToggle }) => {
  const [wannastate, setWannaState] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <div className="relative">
          <Input
            type="text"
            className="w-full p-2 mb-2 rounded-md"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-2 top-2"
          />
        </div>
      </div>
      <div className="flex justify-between mb-4 space-x-2">
        <Button variant={"outline"} onClick={() => setWannaState("all")}>
          All
        </Button>
        <Button variant={"outline"} onClick={() => setWannaState("active")}>
          Active
        </Button>
        <Button variant={"outline"} onClick={() => setWannaState("completed")}>
          Completed
        </Button>
      </div>
      <List
        tasks={tasks}
        wannastate={wannastate}
        onToggle={onToggle}
        search={search}
      />
    </div>
  );
};

export default Filter;
