import React from "react";
import { Check, ChevronRight } from "lucide-react";
interface Task {
  title: string;
  reward: number;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className=" max-w-[361px] w-full flex items-center justify-between gap-2 text-sm text-white">
      <span className=" max-w-[300px] w-full text-start">{task.title}</span>
      <div className="w-[100px] flex items-center justify-between gap-2">
        <span>+ ${task.reward}</span>
        {task.completed ? (
          <Check className="h-5 w-5 text-[#37c27c]" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </div>
    </div>
  );
};

export default TaskItem;
