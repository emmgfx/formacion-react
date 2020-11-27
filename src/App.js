import {
  BrowserRouter as Router, // <- alias
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Search from "./pages/Search";
import Random from "./pages/Random";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <main className="container my-5">
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route exact path="/search" component={Search} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/trending" component={Trending} />
          <Route component={NotFound} status={404} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
