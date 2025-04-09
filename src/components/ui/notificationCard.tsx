import React from "react";

export interface NotificationProps {
  icon: string;
  message: string;
  color: string;
  onClose: () => void;
}

export interface NotificationData {
  icon: string;
  message: string;
  color: string;
}

const NotificationCard: React.FC<NotificationProps> = ({
  icon,
  message,
  color,
  onClose,
}) => {
  return (
    <div
      className={`flex overflow-hidden gap-5 justify-between py-2 pr-4 pl-2 max-w-[300px] w-full ${color} rounded-3xl`}
    >
      <div className="flex gap-4">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[22px]"
        />
        <div className="my-auto basis-auto">{message}</div>
      </div>
      <button onClick={onClose} aria-label="Close notification">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b552067318511d0f7a21597b55daf8027f18fe2f2a9bc534e8f2976c9148a0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
          alt=""
          className="object-contain shrink-0 my-auto w-2.5 aspect-square"
        />
      </button>
    </div>
  );
};

export default NotificationCard;
