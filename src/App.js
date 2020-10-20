import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing components
import Nav from "./components/Nav";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";

// importing pages
import AboutMe from "./pages/AboutMe";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/products">
            <Store />
          </Route>
          <Route exact path="/blog/:id">
            <SingleBlog />
          </Route>
          <Route exact path="/products/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <h1>NO PAGE EXISTS UNDER THE DOMAIN !!!</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
