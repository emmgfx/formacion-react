import { useState } from "react";
import { useHistory } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";

import { setAuth } from "../../redux/actions/auth";

const Login = props => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const submit = event => {
    event.preventDefault();
    // ToDo: Validar datos
    props.setAuth({
      user: user,
    })
    history.push("/");
  }

  return(
    <form onSubmit={submit} style={{ maxWidth: "300px", margin: "0 auto"}}>
      <h3 className="mb-3">Login</h3>
      <label>User</label>
      <input
        type="text"
        className="form-control mb-3"
        value={user}
        onChange={ e => setUser(e.target.value) }
      />
      <label>Password</label>
      <input
        type="password"
        className="form-control mb-3"
        value={password}
        onChange={ e => setPassword(e.target.value) }
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Login
      </button>
    </form>
  )
}

// export default Login;

const mapDispatchToProps = {
  setAuth,
}

export default compose(
  connect(null, mapDispatchToProps),
)(Login)