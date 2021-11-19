import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    teste
                </Route>
                <Route path="/sign-up" exact />
                <Route path="/sign-in" exact />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
