import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login(props) {
    const dispatch = useDispatch();
    let history = useHistory();
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    function Login(e) {
        e.preventDefault();
        let user = { email: email, password: password };
        dispatch({ type: "LOGIN", payload: user });
        history.goBack();
    }
    return (
        <div className="grid">
            <div id="login">
                <h2><span className="fontawesome-lock" />Sign In</h2>
                <form action="#">
                    <fieldset>
                        <p><label htmlFor="email">E-mail address</label></p>
                        <p><input onChange={e=>setEmail(e.target.value)} type="email"  id="email" placeholder="mail@address.com" /></p>
                        <p><label htmlFor="password">Password</label></p>
                        <p><input onChange={e=>setPassword(e.target.value)} type="password" id="password" placeholder="password" /></p>
                        <p><input onClick={(e) => Login(e)} type="submit" defaultValue="Sign In" /></p>
                    </fieldset>
                </form>
            </div> {/* end login */}
        </div>
    );
}

export default Login;