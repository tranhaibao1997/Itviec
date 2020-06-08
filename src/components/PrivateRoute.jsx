import React from 'react';
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute ({ component: Component, user: { isAuthenticated }, ...rest })  


{
    return(
<Route {...rest} render={props => !isAuthenticated ? (<Redirect to="/login"></Redirect>) : (<Component {...props}></Component>)}></Route>
    )

}
    


