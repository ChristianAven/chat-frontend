import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {

    return (
        <Route {...rest}
            component={ (props) => (
                ( isLogged )
                    ?   <Component { ...props } />
                    :   <Redirect to="/auth" /> 
            )}
        />
    )
}

export default PrivateRoute
