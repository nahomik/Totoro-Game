import { NavLink } from "react-router-dom";

const NavBar = () => {
  // Style for the active navigation link
  const activeStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  };

  return (
    <nav className="main-nav">
      <NavLink 
        to="/" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Home
      </NavLink>
      <NavLink 
        to="/scores" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Scores
      </NavLink>
      <NavLink 
        to="/about" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        About
      </NavLink>
      <NavLink 
        to="/help" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Help
      </NavLink>
      <NavLink 
        to="/settings" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Settings
      </NavLink>
      <NavLink 
        to="/contact" 
        className="nav-link"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
