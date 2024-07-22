// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { deleteEmployeeById } from '../apis/EmployeeApi';

// const EmployeeCard = ({ employee }) => {
//     const navigate = useNavigate();

//     const handleView = () => {
//         navigate(`/employees/${employee.id}`);
//     };

//     const handleEdit = () => {
//         navigate(`/employees/${employee.id}/edit`);
//     };

//     const handleDelete = async () => {
//         try {
//             await deleteEmployeeById(employee.id)
//             console.log(`Employee with ID: ${employee.id} is deleted successfully`)
//         } catch (error) {

//         }
//     }

//     useEffect(() => {
//       console.log(employee)
//     },[])

//     return (
//         <div className="bg-white p-5 rounded shadow-md">
//             <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
//             <p className="text-gray-700 mb-1">Phone: {employee.phoneNumber}</p>
//             <p className="text-gray-700 mb-1">Email: {employee.email}</p>
//             <div className="mt-4">
//                 <button
//                     onClick={handleView}
//                     className="bg-blue-500 text-white px-3 py-2 rounded mr-2"
//                 >
//                     View
//                 </button>
//                 <button
//                     onClick={handleEdit}
//                     className="bg-green-500 text-white px-3 py-2 rounded mr-2"
//                 >
//                     Edit
//                 </button>
//                 <button
//                     onClick={handleDelete}
//                     className="bg-red-500 text-white px-3 py-2 rounded"
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default EmployeeCard;




import { useNavigate } from 'react-router-dom';
import { deleteEmployeeById } from '../apis/EmployeeApi';

const EmployeeCard = ({ employee, onDelete }) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/employees/${employee.id}`);
    };

    const handleEdit = () => {
        navigate(`/employees/${employee.id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await deleteEmployeeById(employee.id);
            console.log(`Employee with ID ${employee.id} deleted successfully`);
            if (onDelete) {
                onDelete(employee.id); // Notify parent component to remove the employee from the list
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div className="bg-white p-5 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
            <p className="text-gray-700 mb-1">Phone: {employee.phoneNumber}</p>
            <p className="text-gray-700 mb-1">Email: {employee.email}</p>
            <div className="mt-4">
                <button
                    onClick={handleView}
                    className="bg-blue-500 text-white px-3 py-2 rounded mr-2"
                >
                    View
                </button>
                <button
                    onClick={handleEdit}
                    className="bg-green-500 text-white px-3 py-2 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default EmployeeCard;
