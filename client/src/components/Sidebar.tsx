import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [page, setPage] = useState("");

  return (
    <div className={className}>
      <div className="min-h-screen w-100 flex-shrink-0 antialiased bg-gray-800 text-white">
        <div className="flex flex-col bg-gray-800 h-full ">
          <div className="flex items-center justify-center h-14">
            <div>
              <img className="h-12" src="/images/dotdocs.png" alt="" />
            </div>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li>
                <Link onClick={() => setPage("dashboard")} to="/dashboard" className={`relative flex flex-row items-center h-11 focus:outline-none ${page === "dashboard" ? "bg-gray-700 border-indigo-500" : ""} hover:bg-gray-700 text-white hover:text-gray-300 border-l-4 border-transparent hover:border-indigo-500 pr-6`}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => setPage("retrieval")} to="/retrieval" className={`relative flex flex-row items-center h-11 focus:outline-none ${page === "retrieval" ? "bg-gray-700 border-indigo-500 " : ""} hover:bg-gray-700 text-white hover:text-gray-300 border-l-4 border-transparent hover:border-indigo-500 pr-6`}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Retrieval</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => setPage("index")} to="/index" className={`relative flex flex-row items-center h-11 focus:outline-none ${page === "index" ? "bg-gray-700 border-indigo-500 " : ""} hover:bg-gray-700 text-white hover:text-gray-300 border-l-4 border-transparent hover:border-indigo-500 pr-6`}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Index</span>
                </Link>
              </li>
              <div className="flex-end">
                <li>
                  <Link onClick={() => setPage("settings")} to="/settings" className={`relative flex flex-row items-center h-11 focus:outline-none ${page === "settings" ? "bg-gray-700 border-indigo-500 " : ""} hover:bg-gray-700 text-white hover:text-gray-300 border-l-4 border-transparent hover:border-indigo-500 pr-6`}>
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white hover:text-gray-300 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;