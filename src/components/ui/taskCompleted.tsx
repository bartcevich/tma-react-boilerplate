import React from "react";
import TaskList from "./taskList";
import { UserBadge } from "./gameUserBadge";

interface Task {
  title: string;
  reward: number;
  completed: boolean;
}

const generalTasks: Task[] = [
  { title: "Join Telegram channel", reward: 100, completed: false },
  { title: "Join Facebook", reward: 100, completed: false },
  { title: "Join Instagram", reward: 100, completed: false },
  { title: "Join Instagram", reward: 100, completed: false },
];

const dailyTasks: Task[] = [
  { title: "Check-in on ton blockchain", reward: 500, completed: false },
  { title: "Daily question", reward: 100, completed: false },
  { title: "Earn 300 tokens", reward: 100, completed: false },
  { title: "LiKe post", reward: 100, completed: false },
];

const TaskCompleted: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[393px]">
      <div className="flex z-10 flex-col px-4 pt-4 pb-9 -mt-1.5 w-full">
        <div className="flex gap-5 justify-between w-full text-sm leading-snug text-white whitespace-nowrap">
          <UserBadge
            username="Roger32"
            avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/23c102c55d98715241148643a53f79f8e6269189ff5caffd0e3759c932d71eb0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
          />
          <div className="flex justify-center items-center px-4 py-2.5 font-semibold bg-violet-600 min-h-[40px] rounded-[300px]">
            <div className="gap-1 self-stretch my-auto">$2586</div>
          </div>
        </div>
        <TaskList title="General tasks" tasks={generalTasks} />
        <TaskList title="Daily tasks" tasks={dailyTasks} />
      </div>
    </div>
  );
};

export default TaskCompleted;
