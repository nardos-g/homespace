import React from "react";
import {Field} from '../components/Field';
import { Link } from "react-router-dom";
import "./css/login.css";
import { Button } from "../components/Button";

export const Login = () => {
    return(
        <div className="login__card">
            <div className="login__main">
                <h3 className="login__greeting">Wellcome Back!</h3>
                <form className="login__form" action="">
                    <Field text="Email" kind='text' className = 'field login__field' />
                    <Field text="Password" kind='password' className = 'field login__field' />
                    <Button className="login__btn" tcolor="white" bgColor="#29E925" text="Log In" />
                </form>
                <div className="login__unable">
                    <Link className='login__forget' to='/'>Forgot password?</Link>
                    <div className="login__create">
                        <p>Don't Have An Account Yet?</p> <Link className='login__forget' to='#'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}