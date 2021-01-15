import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./assets/css/App.css"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Scene from "./components/Scene";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

export default function App() {
    return (
        <div>
            <Cursor/>
            <Router>
              {/*  <Navbar/>
                <Scene/>*/}
                <Switch>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Router>
            <About/>
            <Skills/>
            <Portfolio/>
            {/*
            <Contact/>*/}
        </div>
    )
}
