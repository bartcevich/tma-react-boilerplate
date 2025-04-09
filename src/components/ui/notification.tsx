import React from "react";
import { SetStateAction, Dispatch } from "react";
import NotificationCard from "./notificationCard";
// import { NotificationData } from './types';

const notifications = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1abcb545c8d520b186fa40ef5288bb99987d8eff1cfe15bee5f1f43ddcf37d3?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    message: "The task is completed!",
    color: "bg-emerald-500",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39b122b1c975a9f5182663cc903d0c24df02ee8dee36f4f3fceb2607e5a4c121?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    message: "Warning message text here",
    color: "bg-orange-400",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b7fc3790d1b9214e5df189c593964cd55b0f29d2a8ec01920173e48ef1b8ab8?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    message: "Error message text here",
    color: "bg-red-500",
  },
];

interface NotificationIndex {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Notification: React.FC<NotificationIndex> = ({ index, setIndex }) => {
  const showNotification = notifications[index];
  function setIndexForClose(index: number) {
    setIndex(index);
    // setIndexNotification(index);
  }

  return (
    <div className="fixed bottom-[110px] max-w-[361px] w-full z-[25] flex justify-center">
      <NotificationCard
        icon={showNotification.icon}
        message={showNotification.message}
        color={showNotification.color}
        onClose={() => setIndexForClose(1000)}
      />
    </div>
  );
};

export default Notification;
