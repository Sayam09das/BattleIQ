import React, { useState, useEffect } from "react";

const Cookies = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookiesAccepted");
        if (!accepted) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#3B132A",
                color: "#fff",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div>
                We use cookies to improve your experience. By continuing, you accept our{" "}
                <a href="/privacy-policy" style={{ color: "#F3EFDA", textDecoration: "underline" }}>
                    Terms & Conditions
                </a>
                .
            </div>
            <button
                onClick={handleAccept}
                style={{
                    backgroundColor: "#F3EFDA",
                    color: "#3B132A",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                Accept
            </button>
        </div>
    );
};

export default Cookies;
