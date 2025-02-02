import { NavLink } from "react-router-dom";
import { Home, ListTodo, GamepadIcon, Users, User } from "lucide-react";

export const Footer = () => {
  return (
    <div className="relative w-full flex justify-center">
      <footer className="fixed mr-2.5 max-w-[361px] w-full z-20 bottom-[3%] flex items-center justify-between bg-[#434859] bg-opacity-70 backdrop-blur-[20px] rounded-full p-4 border">
        <NavLink
          to="/shop"
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <ListTodo className="w-6 h-6" />
          <span className="text-xs">Tasks</span>
        </NavLink>
        <NavLink
          to="/game"
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <GamepadIcon className="w-6 h-6" />
          <span className="text-xs">Game</span>
        </NavLink>
        <NavLink
          to="/friends"
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Friends</span>
        </NavLink>
        <NavLink
          to="/profile"
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </footer>
    </div>
  );
};
