import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { createNewEmployee } from "../apis/EmployeeApi"; // assuming you have this function

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        position: '',
        department: '',
        address: '',
        dateOfJoining: moment().format("YYYY-MM-DD"), // Default to today's date in YYYY-MM-DD format
        salary: '',
        status: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (e) => {
        setEmployee(prevState => ({
            ...prevState,
            dateOfJoining: moment(e.target.value).format("YYYY-MM-DD")
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createNewEmployee(employee);
            navigate('/employees');
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Employee</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.entries(employee).map(([key, value]) => (
                        key !== 'id' && key !== 'dateOfJoining' && (
                            <div key={key} className="flex flex-col">
                                <label className="text-lg font-medium text-gray-700">
                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded"
                                />
                            </div>
                        )
                    ))}
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Date Of Joining:</label>
                        <input
                            type="date"
                            name="dateOfJoining"
                            value={employee.dateOfJoining}
                            onChange={handleDateChange}
                            className="mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-green-700 text-white p-2 rounded"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
