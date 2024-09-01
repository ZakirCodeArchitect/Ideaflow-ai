"use client";

import React from 'react';
import { useUser } from '@clerk/nextjs';

const UserProfile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  // Access the user's name, which could be string, null, or undefined
  const userName: string | null | undefined = user.fullName;

  // Access the user's profile image, which could be string or undefined
  const userProfileImage: string | undefined = user.imageUrl;

  if (!userName) {
    return <div>No Name Found.</div>;
  }

  return (
    <>
      <style jsx>{`
        .profile-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .profile-image {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          border: 2px solid white;
        }
        .slide-in {
          opacity: 0;
          transform: translateX(8%); /* Start from the right */
          animation: slideIn 1s ease-out forwards; /* 1s duration for slower animation */
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="profile-container">
        {/* {userProfileImage && (
          <img
            src={userProfileImage}
            alt="User Profile"
            className="profile-image"
          />
        )} */}
        <p className="slide-in">
          Hi, {userName.charAt(0).toUpperCase() + userName.slice(1)}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
