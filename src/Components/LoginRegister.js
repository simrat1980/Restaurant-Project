import React from 'react';
import {FcCheckmark} from 'react-icons/fc';

export default function LoginRegister() {
    return (
        <div className="loginregister">
            <div className="vertical"></div>
            <div className="login">
                <form>
                    <div> 
                        <h3>Login</h3>
                        <p>Welcome back! Sign in to your account</p>
                    </div>
                    <div>
                        <label for="username" >Username or Email Id</label>
                    </div>
                    <div>
                        <input type="text" size="40"></input>
                    </div>
                    <div >
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <input type="text" size="40"></input>
                    </div>
                    <div>
                        <a href="#" className="btn-proj btn-full">Login</a>
                    </div>
                    
                    <div>
                        <input type="checkbox" checked></input>
                        <label for="rememberme" className="rememberme">Remember Me</label>
                    </div>
                    <div className="forgotpass">
                        <p><a href="#">Forgot your password</a></p>
                    </div>
                </form>
            </div>

            <div className="register">
            <form> 
                    <div>
                        <h3>Register</h3>
                        <p>Create your very own account</p>
                    </div>
                    <div>
                        <label for="Emailid">Email Id</label>
                    </div>
                    <div>
                        <input type="text" size="40" width="10"></input>
                    </div>
                    <div>
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <input type="text" size="40" width="10"></input>
                    </div>
                    <div>
                        <a href="#" className="btn-proj btn-full">Register</a>
                    </div>
                    <div className="sign-up-today">
                        <p>Sign up today and you will be able to :</p>
                    </div>
                    <div>
                        <ul>
                            <li><FcCheckmark className="check"/>Speed your way through checkout</li>
                            <li><FcCheckmark className="check"/>Track your orders easily</li>
                            <li><FcCheckmark className="check"/>Keep a record of all your purchases</li>
                        </ul>
                    </div>
                    
                </form>
                 
            </div>
            
        </div>
    )
}
