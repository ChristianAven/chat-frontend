import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import ChatPage from "../pages/ChatPage";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const { auth, verificarToken } = useContext(AuthContext);

    useEffect( () => {
        verificarToken();
    },[verificarToken])


    if (auth.checking) {
        return <h1>...</h1>
    }

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute isLogged={ auth.logged } path='/auth' component={AuthRouter} />
                    <PrivateRoute isLogged={ auth.logged } exact path="/" component={ChatPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
