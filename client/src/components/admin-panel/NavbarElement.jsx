import React from "react";

import adminRoutes from "../../routes/client/adminRoutes.js";

const NavbarElement = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="navbar-collapse" id="topNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={adminRoutes.fullUsersPagePath()}>Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={adminRoutes.fullRolesPagePath()}>Roles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={adminRoutes.fullEventsPagePath()}>Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={adminRoutes.fullCategoriesPagePath()}>Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={adminRoutes.fullTicketsPagePath()}>Tickets</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarElement;
