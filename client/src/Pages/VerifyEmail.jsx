import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

/**
 * Handles the email verification link clicked by the user.
 * It reads the token and email from the URL, calls the backend API,
 * stores the JWT token on success, and redirects the user.
 */
export default function VerifyEmail() {
    const [message, setMessage] = useState('Verifying your account...');
    const [success, setSuccess] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Get parameters from the URL
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    // Define the base URL for the backend API (from environment variable)
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/auth/verify-email';

    useEffect(() => {
        // --- DEBUGGING STEP: Log Parameters on Mount ---
        console.log('Verification Parameters received:', {
            token: token ? 'Received' : 'Missing',
            email: email ? 'Received' : 'Missing',
            rawToken: token, // Log raw values for inspection
            rawEmail: email
        });
        // ------------------------------------------------

        // 1. Initial link validation
        if (!token || !email) {
            let missingParam = !token ? 'Token' : 'Email';
            setMessage(`Invalid verification link: Missing required parameter (${missingParam}). Check URL.`);
            setSuccess(false);
            // Redirect to login after a brief message display
            setTimeout(() => navigate('/login'), 3000);
            return;
        }

        // 2. API Call to Verify
        // The backend expects the token and email as query parameters
        axios.get(`${API_URL}?token=${token}&email=${email}`)
            .then(res => {
                // SUCCESS PATH
                setMessage(res.data.message);
                setSuccess(true);

                if (res.data.token) {
                    // Store the JWT token for automatic sign-in
                    localStorage.setItem('authToken', res.data.token);

                    // Navigate to the protected dashboard after a short delay
                    setTimeout(() => navigate('/dashboard'), 1500);
                } else {
                    // Should not happen on successful API call, but as a safeguard
                    setMessage('Verification succeeded, but could not auto-login. Please proceed to login.');
                    setTimeout(() => navigate('/login'), 3000);
                }
            })
            .catch(err => {
                // --- DEBUGGING STEP: Log Full Error Response ---
                console.error('Verification API Error Details:', {
                    status: err.response?.status,
                    data: err.response?.data,
                    error: err.message
                });
                // ------------------------------------------------

                // ERROR PATH (e.g., token expired, invalid)
                const msg = err.response?.data?.message || 'Verification failed. Please try logging in or registering again.';
                setMessage(msg);
                setSuccess(false);

                // Redirect to login after 3s to allow the user to read the error
                setTimeout(() => navigate('/login'), 3000);
            });
    }, [token, email, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Email Verification</h2>
                <div className={`p-4 rounded-lg text-lg ${success ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
                    {message}
                </div>

                <p className="mt-6 text-gray-600">
                    {success ? 'Redirecting to your dashboard shortly...' : 'You will be redirected to the login page...'}
                </p>
            </div>
        </div>
    );
}
