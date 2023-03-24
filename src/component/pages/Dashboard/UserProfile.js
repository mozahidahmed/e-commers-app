import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const UserProfile = () => {
  const [user]=useAuthState(auth)
    return (
      <div className="grid justify-center py-6">
        <div className="card  w-96 bg-base-100 shadow-xl">
          <img
            src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/hero-image.png"
            alt=""
          />
          <div className="card-body">
            <h2 className="card-title">{user?.email}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
      </div>
    );
};

export default UserProfile;