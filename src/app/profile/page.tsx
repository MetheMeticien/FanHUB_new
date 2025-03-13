"use client";

import { useState } from "react";
import Navbar from "@/Navbar/navbar";
import { Button } from "@/components/ui/button";
import "./page.css";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profileImage: "https://via.placeholder.com/150",
    joined: "January 1, 2022",
  });
  
  const [editProfile, setEditProfile] = useState(profile);

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-title">Your Profile</h2>
          <div className="profile-content">
            <div className="profile-fields">
              <label>Name:</label>
              <input className="input-field" name="name" value={editProfile.name} onChange={handleChange} disabled={!isEditing} />
              <label>Email:</label>
              <input className="input-field" name="email" value={editProfile.email} onChange={handleChange} disabled={!isEditing} />
              <label>Profile Picture URL:</label>
              <input className="input-field" name="profileImage" value={editProfile.profileImage} onChange={handleChange} disabled={!isEditing} />
              <p className="joined-text"><strong>Joined:</strong> {profile.joined}</p>
            </div>
            {isEditing ? (
              <div className="button-group">
                <Button onClick={handleSave} className="save-button">Save</Button>
                <Button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</Button>
              </div>
            ) : (
              <div className="edit-button-container">
                <Button onClick={handleEdit} className="edit-button">Edit Profile</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
