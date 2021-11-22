import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import UserContext from "./contexts/UserContext"
import Plans from "./components/pages/Plans";
import SignPlan from "./components/pages/SignPlan";
import NewPlanContext from "./contexts/NewPlanContext";

export default function App() {
    const [userData, setUserData] = useState(null);
    const [newPlan, setNewPlan] = useState(null);

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <NewPlanContext.Provider value={{newPlan, setNewPlan}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/plans" exact>
                        <Plans />
                    </Route>
                    <Route path="/sign-plan/:planId" exact>
                        <SignPlan />
                    </Route>
                    <Route path="/sign-plan-delivery" exact>
                        <SignPlan />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
            </NewPlanContext.Provider>
        </UserContext.Provider>
    );
}
