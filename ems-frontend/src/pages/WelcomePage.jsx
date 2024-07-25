import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate()
    function handleShowEmployees() {
        navigate("/employees")
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-5">Welcome to our App</h1>
                <p className="mb-10">Manage your employees efficiently and effectively.</p>
                <button onClick={handleShowEmployees} className="bg-blue-500 rounded text-white p-2">Show Employees</button>
            </div>
        </div>
    )
};

export default WelcomePage;
