import {useNavigate} from "react-router-dom";
import {deleteEmployeeById} from "../apis/EmployeeApi";

const EmployeeCard = ({employee, onDelete}) => {
    const navigate = useNavigate()
    function handleView() {
        navigate(`/employees/${employee.id}`)
    }

    function handleEdit() {
        navigate(`/employees/${employee.id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await deleteEmployeeById(employee.id)
            console.log(`Employee with ID ${employee.id} deleted successfully`)
            if (onDelete) {
                onDelete(employee.id)
            }
        } catch (error) {
            console.log('Error deleting employee', error)
        }
    }

    return (
        <div className="bg-white p-5 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
            <p className="text-gray-700 mb-1">{employee.phoneNumber}</p>
            <p className="text-gray-700 mb-1">{employee.email}</p>
            <div className="mt-4">
                <button onClick={handleView} className="bg-blue-500 rounded text-white px-3 py-2 mr-2">View</button>
                <button onClick={handleEdit} className="bg-green-500 rounded text-white px-3 py-2 mr-2">Edit</button>
                <button onClick={handleDelete} className="bg-red-500 rounded text-white px-3 py-2">Delete</button>
            </div>
        </div>
    )
};

export default EmployeeCard;
