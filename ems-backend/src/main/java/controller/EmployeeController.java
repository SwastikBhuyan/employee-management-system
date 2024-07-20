package controller;

import entity.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.EmployeeService;

import java.util.List;

@Controller
@RestController
public class EmployeeController {
    private EmployeeService employeeService;
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    // GET methods
    @GetMapping("/employees")
    public ResponseEntity<?> getAllEmployees() {
        try {
            List<Employee> allEmployees = employeeService.findAllEmployees();
            return new ResponseEntity<>(allEmployees, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
}
