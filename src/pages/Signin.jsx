import React from "react";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import './css/Signin.css';

export const Signin = () => {
    return(
        <>
        <div className="signup">
            <p>CREATE AN ACCOUNT</p>
            <div className="card">
                <form action="">
                        <Field className="field" kind='text' text = 'Name'/>
                        <Field className="field" kind='email' text = 'Email'/>
                        <Field className="field" kind='password' text = 'Password'/>
                        <Field className="field" kind='password' text = 'Confirm Password'/>
                        <div className="terms">
                            <input type="checkbox" />
                            <p>I agree to all <a href="#">terms</a> & <a href="#">conditions</a></p>
                        </div>
                        <Button color='white' bgColor="blue" text={'Sign Up'} />
                </form>
            </div>
        </div>
        </>
    )
}