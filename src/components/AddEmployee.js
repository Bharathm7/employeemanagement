import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '/Users/bharathmahesh/webstorm/untitled/src/addemp.css'; // Import your CSS file

const AddEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        email: '',
        department: '',
        role: '',
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/api/employees', employeeData);

            // Handle successful addition (e.g., clear form, display success message)
            setEmployeeData({ name: '', email: '', department: '', role: '' });
            console.log('Employee added successfully:', response.data); // For debugging
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred while adding employee.');
        }
    };

    const handleEdit = (employee) => {
        // Logic for editing employee
    };

    const handleDelete = async (employeeId) => {
        // Logic for deleting employee
    };

    return (

        <div className="container" style={{ position: 'relative' }}>

            <h1 className="header">Add Employee</h1> {/* Larger header */}
            <form onSubmit={handleSubmit} className="form" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={employeeData.name}
                    onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={employeeData.email}
                    onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
                    required
                />
                <label htmlFor="department">Department:</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={employeeData.name}
                    onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}
                    required
                />
                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={employeeData.role}
                    onChange={(e) => setEmployeeData({ ...employeeData, role: e.target.value })}
                    required
                />
                <button type="submit" className="btn">Add Employee</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Link back to dashboard */}
            <Link to="/dashboard" className="link">Back to Dashboard</Link>
        </div>
    );
};

export default AddEmployee;
