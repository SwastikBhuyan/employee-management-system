import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const getEmployees = () => {apiClient.get("/employees")}
export const getEmployeesById = (id) => {apiClient.get(`/employees/${id}`)}
export const getEmployeesByDepartment = (department) => {apiClient.get("/employees/department", {params : {department}})}
export const createNewEmployee = (employee) => {apiClient.post("/employees", employee)}
export const deleteEmployeeById = (id) => {apiClient.delete(`/employees/${id}`)}
export const updateEmployeeById = (id, employee) => {apiClient.put(`/employees/${id}`, employee)}


// import axios from "axios";

// const apiClient = axios.create({
//     baseURL: "http://localhost:8080"
// });

// export const getEmployees = () => apiClient.get("/employees");
