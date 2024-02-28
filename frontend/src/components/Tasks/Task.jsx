import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/TaskApi";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response_task = await getAllTasks();
      setTask(response_task.data);
    }
    loadTask();
  }, []);

  return <div>
    {tasks.map(task => (
      <TaskCard key={task.id} task={task}/>
    ))}
  </div>;
}
