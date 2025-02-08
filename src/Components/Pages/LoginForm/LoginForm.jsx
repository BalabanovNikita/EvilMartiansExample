import React from 'react';
import './LoginForm.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.currentTarget.elements.usernameInput.value)
        console.log(event.currentTarget.elements.passwordInput.value)
    }


    return (
        <div className='wrapper'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input_field'>
                    <input id="usernameInput" type='text' placeholder='Username' required/>
                    <FaUserAlt className='icons'/>
                </div>
                <div className='input_field'>
                    <input id="passwordInput" type='password' placeholder='Password' required/>
                    <RiLockPasswordFill className='icons' />
                </div>
                <div className='remember-forgot-actions'>
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot username or password?</a>
                </div> 
                <button type='submit'>Login</button>

                <div className='signup'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div> 

            </form>
        </div>
    );
};

export default LoginForm;