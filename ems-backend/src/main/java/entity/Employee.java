package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private String position;
    private String department;
    private LocalDate dateOfJoining;
    private int salary;
    private String address;
    private String status;

    public Employee(Long id, String name, String email, String phoneNumber, String position, String department, LocalDate dateOfJoining, int salary, String address, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.department = department;
        this.dateOfJoining = dateOfJoining;
        this.salary = salary;
        this.address = address;
        this.status = status;
    }

    public Employee() {

    }
}
