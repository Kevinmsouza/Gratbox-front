import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/sign-up" exact />
                <Route path="/login" exact />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
