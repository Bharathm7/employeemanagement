import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost3002/api/employees'); // Assuming your API endpoint for fetching users is '/getusers'
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employees:', error);
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => {
                    return <tr>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.department}</td>
                        <td>{employee.role}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
