import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, ListTodo, GamepadIcon, Users, User } from "lucide-react";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/game");
    }
  }, [location, navigate]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative w-full flex justify-center">
      <footer
        className="fixed mr-2.5 max-w-[362px] w-full h-[64px] z-20 bottom-[3%] 
      flex items-center justify-around bg-[#434859] bg-opacity-70 backdrop-blur-[20px] rounded-full p-4 border"
      >
        <button
          onClick={() => handleNavigation("/shop")}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === "/shop"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </button>
        <button
          onClick={() => handleNavigation("/tasks")}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === "/tasks"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <ListTodo className="w-6 h-6" />
          <span className="text-xs">Tasks</span>
        </button>
        <button
          onClick={() => handleNavigation("/game")}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === "/game"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <GamepadIcon className="w-6 h-6" />
          <span className="text-xs">Game</span>
        </button>
        <button
          onClick={() => handleNavigation("/friends")}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === "/friends"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Friends</span>
        </button>
        <button
          onClick={() => handleNavigation("/profile")}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === "/profile"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </footer>
    </div>
  );
};
