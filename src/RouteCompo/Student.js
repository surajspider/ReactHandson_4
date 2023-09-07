import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Student() {
    var [data] = useState([
        {
            name: "Ramsuraj",
            age: 23,
            course: "MERN",
            batch: "April",
            change: "Edit"
        },
        {
            name: "John",
            age: 25,
            course: "MERN",
            batch: "May",
            change: "Edit"
        },
        {
            name: "Alia",
            age: 28,
            course: "MERN",
            batch: "January",
            change: "Edit"
        },
        {
            name: "Nivetha",
            age: 23,
            course: "MERN",
            batch: "April",
            change: "Edit"
        },
        {
            name: "Prasanth",
            age: 25,
            course: "MERN",
            batch: "November",
            change: "Edit"
        },
        {
            name: "Syed",
            age: 23,
            course: "MERN",
            batch: "April",
            change: "Edit"
        },
        {
            name: "Nithya",
            age: 24,
            course: "MERN",
            batch: "December",
            change: "Edit"
        },
        {
            name: "Vasanth",
            age: 24,
            course: "MERN",
            batch: "September",
            change: "Edit"
        },
        {
            name: "John Wick",
            age: 30,
            course: "MERN",
            batch: "April",
            change: "Edit"
        }
    ]);
    return (
        <div>
            <br />
            <div className='topic'>
                <h1 className='stu'>Student Details</h1>
                <button className='but'>Add new Student</button>
            </div>
            <br />
            <table border="1" className='tablestyle'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><Link>{item.change}</Link></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default Student