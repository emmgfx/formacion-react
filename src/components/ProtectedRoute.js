import { Route, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

const ProtectedRoute = props => {
  return props.logged ?
    <Route {...props} /> :
    <Redirect to="/login" />;
}

const mapStateToProps = state => {
  const { logged } = state.auth;
  return { logged };
}

export default compose(
  connect(mapStateToProps),
)(ProtectedRoute);