import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/Home";
import LuyenDe from "./pages/LuyenDe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Document from "./pages/Document";
import DetailDocument from "./pages/DetailDocument";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          {/* // children props component */}
          <HomePage />
        </Route>
        <Route path="/exercise">
          <LuyenDe />
        </Route>

        <Route exact path="/document">
          <Document />
        </Route>
        <Route path="/document/:id">
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
