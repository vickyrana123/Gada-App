import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container my-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16" style={{ marginLeft: 470, marginTop: 50 }}>
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            <h1 style={{ fontSize: 50, marginLeft: 200, marginTop: 60 }}>Welcome to your Dashboard!!</h1>
            <p style={{ fontSize: 20, marginLeft: 240, marginTop: 10, marginBottom: 50 }}>This is a protected page. You can only see this if you're logged in!</p>
            <button className="btn btn-danger mt-3" onClick={handleLogout} style={{ marginLeft: 370, paddingLeft: 100, paddingRight: 100 }}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
