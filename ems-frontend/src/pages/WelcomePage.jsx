import React from 'react';
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate()

    function handleSeeEmployees() {
        navigate("/employees")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Employee Management System</h1>
                <p className="text-gray-700 text-lg mb-8">Manage your employees efficiently and effectively.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={handleSeeEmployees}>
                    See Employees
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
