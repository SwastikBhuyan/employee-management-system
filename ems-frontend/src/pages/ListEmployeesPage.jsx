import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getEmployees } from "../api/EmployeeApi";

export function ListEmployeesPage() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees()
            .then((response) => setEmployees(response.data))
            .catch((error) =>
                console.error("Error fetching employees:", error)
            );
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="container mx-auto p-10">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Employee List
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                </div>
            </div>
        </div>
    );
}
