import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const getEmployees = () => {return apiClient.get("/employees")}
export const getEmployeesById = (id) => {return apiClient.get(`/employees/${id}`)}
export const getEmployeesByDepartment = (department) => {return apiClient.get("/employees/department", {params : {department}})}
export const createNewEmployee = (employee) => {return apiClient.post("/employees", employee)}
export const deleteEmployeeById = (id) => {return apiClient.delete(`/employees/${id}`)}
export const updateEmployeeById = (id, employee) => {return apiClient.put(`/employees/${id}`, employee)}