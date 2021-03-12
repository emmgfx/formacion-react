import {
  BrowserRouter as Router, // <- alias
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Random from "./pages/Random";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import { SearchProvider } from "./context/search";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <main className="container my-5">
          <Switch>
            {/* <Redirect exact from="/" to="/search" /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/random" component={Random} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} status={404} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </SearchProvider>
  );
}

export default App;
