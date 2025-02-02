import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./root";
// import { HomePage } from "./pages/home/page";
import Profile from "./pages/profile/profile";
import Friends from "./pages/friends/friends";
import Game from "./pages/game/game";
import Shop from "./pages/shop/shop";
import Tasks from "./pages/tasks/tasks";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/game" element={<Game />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route index element={<HomePage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
