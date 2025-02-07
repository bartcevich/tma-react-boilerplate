import { NavLink } from "react-router-dom";
import { Home, ListTodo, GamepadIcon, Users, User } from "lucide-react";

export const Footer = () => {
  return (
    <div className="relative w-full flex justify-center">
      <footer
        className="fixed mr-2.5 max-w-[362px] w-full h-[64px] z-20 bottom-[3%] 
      flex items-center justify-around bg-[#434859] bg-opacity-70 backdrop-blur-[20px] rounded-full p-4 border"
      >
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            "flex flex-col items-center gap-1 " +
            (isActive ? "text-white" : "text-gray-400 hover:text-white")
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            "flex flex-col items-center gap-1 " +
            (isActive ? "text-white" : "text-gray-400 hover:text-white")
          }
        >
          <ListTodo className="w-6 h-6" />
          <span className="text-xs">Tasks</span>
        </NavLink>
        <NavLink
          to="/game"
          className={({ isActive }) =>
            "flex flex-col items-center gap-1 " +
            (isActive ? "text-white" : "text-gray-400 hover:text-white")
          }
        >
          <GamepadIcon className="w-6 h-6" />
          <span className="text-xs">Game</span>
        </NavLink>
        <NavLink
          to="/friends"
          className={({ isActive }) =>
            "flex flex-col items-center gap-1 " +
            (isActive ? "text-white" : "text-gray-400 hover:text-white")
          }
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Friends</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            "flex flex-col items-center gap-1 " +
            (isActive ? "text-white" : "text-gray-400 hover:text-white")
          }
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </footer>
    </div>
  );
};
