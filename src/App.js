import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/sign-up" exact >
                    <SignUp />
                </Route>
                <Route path="/login" exact >
                    <Login />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
