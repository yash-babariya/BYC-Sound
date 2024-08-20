import React from 'react';
import '../form.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="form-main">
            <div className="container">
                <section>
                    <div className="form">
                        <h2>Login</h2>
                        <label>email</label>
                        <input type="email" name="email" />
                        <label>password</label>
                        <input type="password" name="password" />
                        <div className="signup-btn">
                            <button>Login</button>
                        </div>
                        <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </section>
            </div>
        </div>
    )
}
