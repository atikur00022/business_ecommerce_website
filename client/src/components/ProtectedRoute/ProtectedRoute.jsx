import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";

const ProtectedRoute = ({ element, allowedRoles, redirectIfAuth = false }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/protected", { withCredentials: true });

                if (response.data.status === "success") {
                    setIsAuthenticated(true);
                    setUserRole(response.data.user.role); // ✅ Get role directly from API response
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <FullScreenLoader />; // Show a loading state while checking authentication
    }

    // 🚀 Redirect logged-in users away from login/registration pages
    if (redirectIfAuth && isAuthenticated) {
        if (userRole === "superadmin") return <Navigate to="/superadmindashboard" replace />;
        if (userRole === "admin") return <Navigate to="/admindashboard" replace />;
        if (userRole === "user") return <Navigate to="/userdashboard" replace />;
    }

    // 🚀 Ensure user role matches allowed roles
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/login" replace />;
    }

    return element;
};

export default ProtectedRoute;
