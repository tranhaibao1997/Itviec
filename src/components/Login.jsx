import React from 'react';
import { useHistory } from "react-router-dom";

function Login(props) {
    let history = useHistory();
    console.log(props)
    function Login(e) {
        e.preventDefault()
        props.setUser({ isAuthenticated: true })
        history.push(`/`)
    }
    return (
        <div className="grid">
            <div id="login">
                <h2><span className="fontawesome-lock" />Sign In</h2>
                <form action="#">
                    <fieldset>
                        <p><label htmlFor="email">E-mail address</label></p>
                        <p><input type="email" id="email" placeholder="mail@address.com" /></p>
                        <p><label htmlFor="password">Password</label></p>
                        <p><input type="password" id="password" placeholder="password" /></p>
                        <p><input onClick={(e) => Login(e)} type="submit" defaultValue="Sign In" /></p>
                    </fieldset>
                </form>
            </div> {/* end login */}
        </div>
    );
}

export default Login;