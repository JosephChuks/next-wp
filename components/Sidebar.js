"use client";
import settings from "@/settings.json";

console.log(settings.sidebarMenu);

const Sidebar = () => {
  return (
    <nav className="sidebar m-none">
      <div className="menu-primary-container">
        <ul id="menu-primary" className="primary-menu">
          {settings.sidebarMenu.map(menu => <>
            <li>
            <a href={menu.url} aria-current="page">
              {menu.label}
            </a>
          </li>
          </>)}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
