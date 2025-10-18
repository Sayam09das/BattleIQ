import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f8f8f8',
                textAlign: 'center',
                padding: '0 20px',
            }}
        >
            <h1 style={{ fontSize: '6rem', margin: 0, color: '#3B132A' }}>404</h1>
            <h2 style={{ fontSize: '2rem', margin: '20px 0', color: '#3B132A' }}>
                Oops! Page Not Found
            </h2>
            <p style={{ marginBottom: '30px', color: '#6B6B6B' }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '12px 30px',
                    fontSize: '1rem',
                    color: '#fff',
                    backgroundColor: '#3B132A',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: '0.3s',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#5C2B49')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#3B132A')}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
