import React, { useState, useEffect } from "react";
import { getProfile } from "../repository/authenticationRepository";

function Profile() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        console.log(userData);
        setUser(userData);
      } catch (err) {
        setError("Failed to fetch profile data.");
        console.error("Error fetching profile data:", err);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-black text-center">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <p className="form-control">{user.user}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Address:</label>
                <p className="form-control">{user.address}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Full Name:</label>
                <p className="form-control">{user.fullname}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
