import { useEffect, useState } from "react";
import { getEmployeesById, updateEmployeeById } from "../apis/EmployeeApi";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        position: '',
        department: '',
        address: '',
        dateOfJoining: '',
        salary: '',
        status: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await getEmployeesById(id);
                setEmployee(response.data);
                console.log(response.data)
                setIsLoading(false);
            } catch (error) {
                console.log("Error: ", error);
                setIsLoading(false);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmployeeById(id, employee);
            navigate(`/employees/${id}`);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Employee</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.entries(employee).map(([key, value]) => (
                        key !== 'id' && (
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

export default EditEmployee;
