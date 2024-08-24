import React, { Component } from 'react';
import './index.css';

class Student extends Component {
    render() {
        const students = [
            { id: 1, name: "trần thị ngọc anh", address: "nghệ an" },
            { id: 2, name: "lâm thị thủy", address: "nghệ an" },
            { id: 3, name: "quốc thiên", address: "nghệ an" },
        ];

        return (
            <div className="table-container">
                <h2>Student List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Student;
