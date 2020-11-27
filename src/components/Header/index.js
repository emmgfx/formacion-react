import { NavLink } from "react-router-dom";

const Header = props => {
  return(
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/search">Buscar</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/random">Random</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/trending">Trending</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;