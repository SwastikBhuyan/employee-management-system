import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        if (username === "admin" && password === "admin") {
            console.log("login successful")
            navigate("/welcome")
        } else {
            setLoginError(true)
        }
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="form-container bg-white p-10 rounded shadow-md w-96">
                <h1 className="text-4xl font-bold text-blue-700">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <label htmlFor="username" className="block mb-2">Username:</label>
                        <input type="text" id="username" name="username" className="rounded border-2 border-black p-2"
                               onChange={handleUsernameChange}/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password" className="block mb-2">Password:</label>
                        <input type="text" id="password" name="password" className="rounded border-2 border-black p-2"
                               onChange={handlePasswordChange}/>
                    </div>
                    <button type="submit" className="mt-5 mb-5 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
                        Login
                    </button>
                    {loginError && <div>Try Again!</div>}
                </form>
            </div>
        </div>
    )
};

export default LoginPage;
