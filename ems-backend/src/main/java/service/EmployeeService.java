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
}
