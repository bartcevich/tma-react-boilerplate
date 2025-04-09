import React, { useState } from "react";
import TaskItem from "./taskItem";
import Notification from "./notification";
import { DailyCheckin } from "./dailyCheckin";

interface Task {
  title: string;
  reward: number;
  completed: boolean;
}

interface TaskListProps {
  title: string;
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks }) => {
  const [indexNotification, setIndexNotification] = useState(1000);

  function notificationForUser(index: number) {
    setIndexNotification(index);
  }
  return (
    <>
      <div className="self-stretch mt-7 text-lg font-medium leading-tight text-white">
        {title}
      </div>
      {tasks.map((task, index) => (
        <button
          key={index}
          onClick={() => notificationForUser(index)}
          className="mt-2 max-w-[361px] w-full h-[64px] flex justify-between px-[16px] 
          text-white rounded-2xl"
          style={{
            backgroundColor: "rgba(16,26,51, 0.7)",
            backdropFilter: "blur(92px)",
            boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
          }}
        >
          <TaskItem key={index} task={task} />
        </button>
      ))}
      {indexNotification <= 2 && (
        <Notification
          index={indexNotification}
          setIndex={setIndexNotification}
        />
      )}
      {indexNotification === 3 && <DailyCheckin />}
    </>
  );
};

export default TaskList;
