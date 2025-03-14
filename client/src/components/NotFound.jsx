import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notFoundImage from "../assets/images/404_Not_Found.svg"; // Add a relevant 404 illustration
import logo from "../assets/images/404logo.png"; // Add your logo

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light px-4">
            {/* Logo */}
            <motion.img
                src={logo}
                alt="Logo"
                className="mb-3"
                style={{ width: "120px" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />

            {/* 404 Image */}
            <motion.img
                src={notFoundImage}
                alt="Not Found"
                className="img-fluid"
                style={{ maxWidth: "400px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />

            {/* Heading */}
            <motion.h1
                className="mt-4 fw-bold text-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Oops! Page Not Found
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-muted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                The page you’re looking for doesn’t exist.
            </motion.p>

            {/* Back to Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Link to="/" className="btn btn-success mt-3 px-4 py-2">
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
