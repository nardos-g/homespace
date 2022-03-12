import React, { useState } from "react";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { auth } from "../firebase.config";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './css/Signin.css';

export const Signin = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confPassword, setConfPassword] = useState('');

    const record = (e, type) => {
        //I need to check which Field is being activated and then update the state.
        if(type === 'Name'){
            //I can do simple authentication here and show a red sign or a text below it.
            setName(e.target.value);
        }else if(type == 'Email'){
            setEmail(e.target.value)
        }else if(type === 'Password'){
            setPassword(e.target.value)
        }else{
            setConfPassword(e.target.value)
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if(e.target[4].checked === false){
            alert('<h2>You should agree to our terms to proceed!</h2>')
            return
        }
        if (password === confPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                // Now write further information about the user in Users collection
                let docRef = collection(db, 'Users');
                addDoc(docRef, {
                    name: name,
                    email: email,
                }).then(res => {
                    setName(''); setEmail('');setPassword('');setConfPassword('');
                })
                .catch(reason => console.log(reason.message))
            })
            .catch(reason => console.log(reason.message))
        }
        
    }

    return(
        <>
        <div className="signup">
            <p>CREATE AN ACCOUNT</p>
            <div className="card">
                <form onSubmit={submit} action="">
                        <Field onChange = {record} value = {name} id = 'userName' kind='text' text = 'Name'/>
                        <Field onChange = {record} value = {email} id = 'userEmail' kind='email' text = 'Email'/>
                        <Field onChange = {record} value = {password} id = 'userPassword' kind='password' text = 'Password'/>
                        <Field onChange = {record} value = {confPassword} id = 'userPasswordConf' kind='password' text = 'Confirm Password'/>
                        <div className="terms">
                            <input name="termsbox" type="checkbox" value='true'/>
                            <p>I agree to all <a href="#">terms</a> & <a href="#">conditions</a></p>
                        </div>
                        <Button color='white' bgColor="blue" text={'Sign Up'} />
                </form>
            </div>
        </div>
        </>
    )
}