import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardNavbar = () => {
    return (
      <div className="">
        <div className="flex justify-center py-6 bg-[#FFC73B]">
          <Link to="userprofile">
            <button className="btn btn-outline mx-2 rounded-full">
              My Profile
            </button>
          </Link>
          <Link to="create-account">
            <button className="btn btn-outline mx-2 rounded-full">
              Create Account
            </button>
          </Link>
          <Link to="add-review">
            <button className="btn btn-outline mx-2 rounded-full">
              Add Review
            </button>
          </Link>

     
          <button className="btn btn-outline mx-2 rounded-full">Contact</button>
        </div>
        <hr />
        <Outlet></Outlet>
      </div>
    );
};

export default DashboardNavbar;