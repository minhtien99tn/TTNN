import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailDocument from "./pages/DetailDocument";
import Document from "./pages/Document";
import HomePage from "./pages/Home";
import LuyenDe from "./pages/LuyenDe";
import ListPart from "./pages/LuyenDe/ListPart";
import Irregular from "./pages/Irregular";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          {/* // children props component */}
          <HomePage />
        </Route>
        <Route exact path="/exercise">
          <LuyenDe />
        </Route>
        <Route path="/exercise/:id">
          <ListPart />
        </Route>

        <Route exact path="/document">
          <Document />
        </Route>

        <Route path="/document/:id">
          <DetailDocument />
        </Route>

        <Route path="/360-irregular">
          <Irregular />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
