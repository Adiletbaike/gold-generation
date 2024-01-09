import React, { useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-yellow-900  hover:no-underline active:bg-yellow-900 rounded-sm text-base";
const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname == item.path
          ? "bg-yellow-900 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl text-yellow-400">{item.icon}</span>
      {item.label}
    </Link>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-900">
      <div className="flex items-center gap-2 px-3 py-3 border-b border-neutral-700">
        <span className="text-neutral-100 text-3xl font-bold"><span className="text-yellow-400">Altyn</span> Muun</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames("", linkClasses)}>
          <div
            className="flex gap-2 text-red-500 cursor-pointer hover:no-underline"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/login");
            }}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Чыгуу
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
