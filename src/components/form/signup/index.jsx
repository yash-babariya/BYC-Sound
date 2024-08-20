import React, { useState } from 'react';
import '../form.scss';
import { Link } from 'react-router-dom';

export default function Signup() {


    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        localStorage.setItem('formData', JSON.stringify(formData))
    }
    return (
        <div className="form-main">
            <div className="container">
                <section>
                    <div className="form">
                        <h2>Sign Up</h2>
                        <label>full name</label>
                        <input onChange={handleChange} type="text" name="name" />
                        <label>email</label>
                        <input onChange={handleChange} type="email" name="email" />
                        <label>password</label>
                        <input onChange={handleChange} type="password" name="password" />
                        <div className="signup-btn">
                            <button onClick={() => { handleSubmit() }}>Sign Up</button>
                        </div>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                    </div>
                </section>
            </div>
        </div>
    )
}
