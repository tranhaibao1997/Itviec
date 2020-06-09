import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

export default function PrivateRoute ({ component: Component, ...rest })  
{
    let user = useSelector((state) => state.user);
    return(
<Route {...rest} render={()=>!user.isAuthenticated ? (<Redirect to="/login"></Redirect>) : (<Component></Component>)}></Route>
    )

}
    


