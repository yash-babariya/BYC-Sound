import React, { useState } from 'react';
import '../form.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

export default function Login() {
    const users = useSelector(state => state.user.users);

    const initialValue = {
        email: "",
        password: "",
    };

    const [userObj, setUserObj] = useState(initialValue);

    const functionOnChange = (e) => {
        setUserObj({ ...userObj, [e.target.name]: e.target.value });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const validate = () => {
        if (!userObj.email) {
            toast.error("Please Enter your Email");
            return false;
        } else if (!userObj.email.includes("@")) {
            toast.error("Please Enter valid Email");
            return false;
        } else if (!userObj.password) {
            toast.error("Please Enter your Password");
            return false;
        } else if (userObj.password.length < 8) {
            toast.error("Please Enter minimum 8 letters");
            return false;
        }

        return true;
    };

    const handleLogin = () => {
        if (validate()) {
            const foundUser = users.find(user => user.email === userObj.email && user.password === userObj.password);
            if (foundUser) {
                toast.success("Login Successful!");
                localStorage.setItem("IsLogin", "true");
                window.location.reload();
            } else {
                toast.error("Invalid email or password. Please try again.");
            }
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="form-main">
            <div className="container">
                <section>
                    <div className="form">
                        <h2>Login</h2>
                        <div className="form-item">
                            <label>email</label>
                            <input
                                onChange={functionOnChange}
                                onKeyDown={handleKeyDown}
                                value={userObj.email}
                                type="email"
                                name="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-item">
                            <label>password</label>
                            <input
                                onChange={functionOnChange}
                                value={userObj.password}
                                type="password"
                                name="password"
                                autoComplete="new-password"
                            />
                            {showPassword ? (
                                <FaEyeSlash onClick={togglePasswordVisibility} className="password-icon" />
                            ) : (
                                <FaEye onClick={togglePasswordVisibility} className="password-icon" />
                            )}
                        </div>
                        <div className="signup-btn">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </section>
            </div>
        </div>
    )
}
