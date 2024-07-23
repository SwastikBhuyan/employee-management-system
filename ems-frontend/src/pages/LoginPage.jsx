import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        if (username === "admin" && password === "admin") {
            console.log("login successful")
            navigate("/welcome")
        }
        else setLoginError(true)
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded shadow-md w-96">
                <h1 className="text-4xl font-bold text-green-700 mb-10 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="username" className="block text-lg mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-lg mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-600"
                        >
                        Login
                    </button>
                    {loginError && <div className='mt-5'>Try again</div>}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
