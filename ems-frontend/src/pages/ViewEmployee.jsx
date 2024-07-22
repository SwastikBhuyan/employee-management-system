import { useEffect, useState } from "react";
import { getEmployeesById } from "../apis/EmployeeApi";
import { useParams } from "react-router-dom";

const ViewEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await getEmployeesById(id);
                setEmployee(response.data);
                console.log(response);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchEmployee();
    }, [id]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
                {employee ? (
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Employee Details</h1>
                        <div className="space-y-4">
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Name:</span> {employee.name}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Email:</span> {employee.email}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Phone:</span> {employee.phoneNumber}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Position:</span> {employee.position}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Department:</span> {employee.department}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Address:</span> {employee.address}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Date Of Joining:</span> {employee.dateOfJoining}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Salary:</span> ${employee.salary.toLocaleString()}</p>
                            <p className="text-lg font-medium text-gray-700"><span className="font-semibold">Status:</span> {employee.status}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-700">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default ViewEmployee;
