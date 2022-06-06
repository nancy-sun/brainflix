import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Switch>
          <Redirect from="/video" to="/" />
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/:videoID" component={Main} />
        </Switch>
      </>
    </BrowserRouter>
  )
}