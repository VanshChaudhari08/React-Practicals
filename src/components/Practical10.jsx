import React from 'react'
import { useState } from 'react';

export default function Practical10() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const handleSubmit = () => {
        setSubmittedData({
            firstName,
            lastName,
            message
        });
    };
    return (
        <div>
            <div style={{ width: "400px", margin: "30px auto" }}>
                <h2>Feedback Form</h2>
                <label>First Name</label><br />
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br /><br />

                <label>Last Name</label><br />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br /><br />
                <label>Message</label><br />
                <textarea
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br /><br />
                <button onClick={handleSubmit}>
                    Submit
                </button>
                {submittedData && (
                    <div style={{ marginTop: "20px" }}>
                        <h3>Submitted Information</h3>
                        <p>
                            <strong>First Name:</strong> {submittedData.firstName}
                        </p>
                        <p>
                            <strong>Last Name:</strong> {submittedData.lastName}
                        </p>
                        <p>
                            <strong>Message:</strong> {submittedData.message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

