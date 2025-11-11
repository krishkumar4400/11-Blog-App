import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import Sidebar from "../../components/Admin/Sidebar.jsx";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => navigate("/");

  const [width, setWidth] = useState(250); // initial sidebar width
  const [isResizing, setIsResizing] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // sidebar collapse toggle
  const sidebarRef = useRef(null);

  const startResizing = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.body.style.userSelect = "auto";
    document.body.style.cursor = "default";
  };

  const resize = (event) => {
    if (isResizing && !collapsed) {
      const newWidth = event.clientX;
      if (newWidth > 150 && newWidth < 450) {
        setWidth(newWidth);
      }
    }
  };

  // Allow resizing using mouse
  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  });

  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebarWidth");
    const savedCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    if (savedWidth) setWidth(Number(savedWidth));
    setCollapsed(savedCollapsed);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarWidth", width);
    localStorage.setItem("sidebarCollapsed", collapsed);
  }, [width, collapsed]);


  return (
    <>
      {/* ---------- Top Navbar ---------- */}
      <div className="flex items-center justify-between px-5 py-3 h-[70px] sm:px-10 border-b border-gray-200 bg-white shadow-sm">
        <img
          src={assets.logo}
          onClick={() => navigate("/")}
          className="w-28 sm:w-40 cursor-pointer"
          alt="Logo"
        />
        <button
          className="text-sm px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* ---------- Main Layout ---------- */}
      <div className="flex h-[calc(100vh-70px)]">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`relative bg-white border-r border-gray-200 transition-all duration-200 ease-linear flex flex-col ${
            collapsed ? "w-[80px]" : ""
          }`}
          style={{
            width: collapsed ? "80px" : `${width}px`,
            minWidth: "80px",
            maxWidth: "450px",
          }}
        >
          {/* Sidebar component */}
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

          {/* Resizer Handle */}
          {!collapsed && (
            <div
              onMouseDown={startResizing}
              className={`absolute top-0 right-0 w-2 h-full cursor-col-resize ${
                isResizing ? "bg-blue-300" : "hover:bg-blue-200"
              }`}
            ></div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
