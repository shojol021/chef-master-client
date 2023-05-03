import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Terms and Conditions</h1>
      <p className="lead">
        Welcome to Mexican Cuisine! By using our website, you agree to the following terms and conditions:
      </p>
      <ul>
        <li>The content on this website is for informational purposes only.</li>
        <li>We make no guarantees about the accuracy, completeness, or suitability of the information on this website.</li>
        <li>We reserve the right to modify, suspend, or discontinue any part of this website at any time.</li>
        <li>We are not responsible for any third-party content that may be accessed through this website.</li>
        <li>You are responsible for ensuring that any information you provide on this website is accurate and up-to-date.</li>
        <li>You may not use this website for any illegal or unauthorized purpose.</li>
        <li>We reserve the right to terminate your access to this website for any reason at any time.</li>
        <li>These terms and conditions are governed by the laws of the State of California.</li>
      </ul>
      <Link to='/register'><Button variant="dark"><FaArrowLeft></FaArrowLeft> Go back to Register page</Button></Link>
    </div>
  );
};

export default Terms;
