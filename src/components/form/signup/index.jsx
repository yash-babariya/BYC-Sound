import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../form.scss';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { addUsers } from '../../../redux/user/userSlice';

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userObj, setUserObj] = useState({
        name: "",
        email: "",
        password: "",
    });

    const functionOnChange = (e) => {
        setUserObj({ ...userObj, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Check if all required fields are filled
        if (!userObj.name || !userObj.email || !userObj.password) {
            toast.error("Please fill out all fields");
            return false;
        }

        // Check for a valid email
        if (!emailRegex.test(userObj.email)) {
            toast.error("Please enter a valid email");
            return false;
        }

        // Detailed password checks
        if (userObj.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return false;
        }
        if (!/[A-Z]/.test(userObj.password)) {
            toast.error("Password must include at least one uppercase letter.");
            return false;
        }
        if (!/[a-z]/.test(userObj.password)) {
            toast.error("Password must include at least one lowercase letter.");
            return false;
        }
        if (!/\d/.test(userObj.password)) {
            toast.error("Password must include at least one number.");
            return false;
        }
        if (!/[@$!%*?&]/.test(userObj.password)) {
            toast.error("Password must include at least one special character from @$!%*?&.");
            return false;
        }

        return true;
    };

    const handleSignUp = () => {
        if (validate()) {
            dispatch(addUsers(userObj));
            setUserObj({
                name: "",
                surname: "",
                email: "",
                password: "",
            });
            toast.success("Signed up successfully!");
            navigate("/login");
        }
    };


    // Toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form-main">
            <div className="container">
                <section>
                    <div className="form">
                        <h2>Sign Up</h2>
                        <div className="form-item">
                            <label>full name</label>
                            <input onChange={functionOnChange} type="text" name="name" />
                        </div>
                        <div className="form-item">
                            <label>email</label>
                            <input onChange={functionOnChange} type="email" name="email" />
                        </div>
                        <div className="form-item">
                            <label>password</label>
                            <input onChange={functionOnChange} type={showPassword ? "text" : "password"} name="password" />
                            {showPassword ? (
                                <FaEye onClick={togglePasswordVisibility} className="password-icon" />
                            ) : (
                                <FaEyeSlash onClick={togglePasswordVisibility} className="password-icon" />
                            )}
                        </div>
                        <div className="signup-btn">
                            <button onClick={handleSignUp}>Sign Up</button>
                        </div>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                    </div>
                </section>
            </div>
        </div>
    )
}
