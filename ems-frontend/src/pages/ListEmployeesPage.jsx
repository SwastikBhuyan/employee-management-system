import {useEffect, useState} from "react";
import {getEmployees, getEmployeesByDepartment} from "../apis/EmployeeApi";
import {useNavigate} from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

export function ListEmployeesPage() {
    const [employees, setEmployees] = useState([])
    const [department, setDepartment] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if (department == "") {
            getEmployees()
                .then((response) => {
                    setEmployees(response.data)
                    console.log(response)
                })
                .catch((error) => console.log(error))
        } else {
            getEmployeesByDepartment(department)
                .then((response) => setEmployees(response.data))
                .catch((error) => console.log(error))
        }
    }, [department]);

    function handleDepartmentChange(event) {
        setDepartment(event.target.value)
    }

    function handleAddEmployee() {
        navigate("/employees/add")
    }

    function handleDelete(id) {
        setEmployees(employees.filter((employee) => (employee.id !== id)))
    }

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <div className="mx-auto p-10">
                <h1 className="text-4xl font-bold mb-5">Employees List</h1>
                <div className="">
                    <label htmlFor=""></label>
                    <select onChange={handleDepartmentChange} name="department" id="department" value={department} className="py-2 px-3 mb-5 rounded border-black border-2">
                        <option value="">All Departments</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>
                <button onClick={handleAddEmployee} className="text-white bg-green-600 p-2 rounded px-3 mb-5">
                    Add New Employee
                </button>
                <div className="grid grid-cols-3 gap-6">
                    {employees.map((employee) => (
                        <EmployeeCard
                            key = {employee.id}
                            employee = {employee}
                            onDelete = {handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
