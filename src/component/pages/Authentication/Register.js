import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="grid justify-center">
      <h1 className="lg:text-5xl font-bold mb-12 mt-4 text-center">Register</h1>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 py-2  
      justify-center items-center"
      >
        <div className="w-full">
          <img
            src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/hero-image.png"
            alt=""
            className="lg:h-[350px]"
          />
        </div>
        <div className="">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
            
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Register</button>
                <Link to="/login">
                  <span className="py-2 text-primary">have a Account </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
