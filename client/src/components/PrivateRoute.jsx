// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth`, {
                    withCredentials: true,
                });

                if (res.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setCheckingAuth(false);
            }
        };

        verifyUser();
    }, []);

    // 🔄 Show loading indicator while checking
    if (checkingAuth) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#0B0B0B] text-[#F3EFDA]">
                <div className="text-lg animate-pulse">Checking authentication...</div>
            </div>
        );
    }

    // 🚫 If not logged in → redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // ✅ Authenticated → show protected page
    return children;
};

export default PrivateRoute;
