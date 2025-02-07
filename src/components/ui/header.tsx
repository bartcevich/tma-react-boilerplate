// import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Header = () => {
  // const { t } = useTranslation();

  return (
    <div className="container max-w-lg pt-[var(--tg-viewport-content-safe-area-inset-top)]">
      <header className="bg-black z-20 pt-1 pb-4 flex items-center justify-between relative text-white">
        {/* {t("header")} */}
        <NavLink to="/shop">shop</NavLink>
        <NavLink to="/tasks">tasks</NavLink>
        <NavLink to="/game">game</NavLink>
        <NavLink to="/friends">friends</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </header>
    </div>
  );
};
