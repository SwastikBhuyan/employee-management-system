import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getEmployees, getEmployeesByDepartment } from "../apis/EmployeeApi";

export function ListEmployeesPage() {
    const [employees, setEmployees] = useState([]);
    const [department, setDepartment] = useState("");

    useEffect(() => {
        if (department === "") {
            getEmployees()
            .then((response) => setEmployees(response.data))
            .catch((error) => console.log("Error fetching employees: ",error))
        } else {
            getEmployeesByDepartment(department)
            .then((response) => setEmployees(response.data))
            .catch((error) => console.log("Error fetching employees: ",error))
        }
    }, [department]);

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <div className="container mx-auto p-10">
                <h1 className="text-4xl font-bold mb-5">Employees List</h1>
                <div>
                    <label htmlFor="department"></label>
                    <select
                        name="department"
                        id="department"
                        value={department}
                        className="mb-5 rounded p-2 border-black"
                        onChange={handleDepartmentChange}
                    >
                        <option value="">All Departments</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>
                <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                </div>
            </div>
        </div>
    );
}

