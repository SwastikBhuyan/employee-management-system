package service;

import entity.Employee;
import org.springframework.stereotype.Service;
import repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public List<Employee> findEmployeesByDepartment(String department) {
        return employeeRepository.findAllByDepartment(department);
    }

    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }

    public void saveEmployee(Employee newEmployee) {
        employeeRepository.save(newEmployee);
    }

    public void updateEmployeeById(Long id, Employee employee) {
        Employee existingEmployee = employeeRepository.findById(id).orElse(null);
        if (existingEmployee != null) {
            existingEmployee.setName(employee.getName());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setPhoneNumber(employee.getPhoneNumber());
            existingEmployee.setPosition(employee.getPosition());
            existingEmployee.setDepartment(employee.getDepartment());
            existingEmployee.setDateOfJoining(employee.getDateOfJoining());
            existingEmployee.setSalary(employee.getSalary());
            existingEmployee.setAddress(employee.getAddress());
            existingEmployee.setStatus(employee.getStatus());
            employeeRepository.save(existingEmployee);
        }
    }

}
