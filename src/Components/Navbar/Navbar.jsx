import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <main>
        <nav className="navbar nav-custom">
          <div className="container-fluid">
            <div className="navbar-brand" >
              <img
                src={`/doorvel.jpeg`}
                alt="doorvel_logo"
                width="60"
                height="60"
                className="d-inline-block align-text-center"
              />
              Doorvel
            </div>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
