import React from 'react'
import Home from './Home'
import About from './About'
import Student from './Student';
import { Routes, Route, NavLink } from 'react-router-dom';
function RouteCompo() {
    return (
        <div>
            <div className='pdiv'>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/"><h1 className="h11">Home</h1></NavLink>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/Student"><h1 className="h11">Student</h1></NavLink>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/About"><h1 className="h11">About</h1></NavLink>
            </div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Student" element={<Student />}></Route>
            </Routes>
        </div>
    )
}

export default RouteCompo