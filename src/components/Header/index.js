import { NavLink, useHistory } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { setLoggedOut } from "../../redux/actions/auth";

const Header = props => {

  const history = useHistory();

  const logout = () => {
    props.setLoggedOut();
    history.push("/");
  }

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
        { props.logged &&
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              Hola {props.profile.user}.
              <button
                className="btn btn-sm btn-dark ml-3"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        }
        { !props.logged && 
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="btn btn-sm btn-dark"
                activeClassName="disabled"
                to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
}

const mapStateToProps = state => {
  const { logged, profile } = state.auth;
  return {
    logged,
    profile,
  }
}

const mapDispatchToProps = {
  setLoggedOut,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Header);