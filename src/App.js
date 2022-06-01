import "./App.scss";
import Nav from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import { BrowserRouter, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
      </>
    </BrowserRouter>
  )
}