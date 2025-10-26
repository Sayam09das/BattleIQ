import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_API_URL}/auth`, {
                    withCredentials: true,
                });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            }
        };
        verifyAuth();
    }, []);

    if (isAuthenticated === null) {
        return (
            <div className="flex items-center justify-center h-screen text-[#F3EFDA]">
                Checking authentication...
            </div>
        );
    }

    // If not authenticated, redirect to login immediately
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
