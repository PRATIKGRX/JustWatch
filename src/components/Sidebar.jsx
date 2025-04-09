import React from "react";
import { Link } from "react-router-dom";
import { IoLogoOctocat } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="px-4 h-screen flex flex-col">

      <div className="h-30 flex items-center justify-center">
        <p className="text-5xl"><IoLogoOctocat /></p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-6 pb-6">
          <li className=" bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard"><p className="flex items-center gap-2"><MdDashboardCustomize />Dashboard</p></Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/users"><p className="flex items-center gap-2"><FaRegUser />User Management</p></Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/settings"><p className="flex items-center gap-2"><TbSettingsAutomation />Settings</p></Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/content"><p className="flex items-center gap-2">Content Management</p></Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/reports"><p className="flex items-center gap-2">Analytics & Reports</p></Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/transactions">Transactions</Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/notifications">Notifications</Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/logs">Activity Logs</Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/support">Support</Link>
          </li>
          <li className="bg-stone-200 px-3 py-2 text-xl rounded-lg">
            <Link to="/movie-app/dashboard/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;