import React from 'react';

const CreateAccount = () => {
    return (
      <div className="grid justify-center">
        <div className="card glass p-5">
          <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="Name..."
                className="input input-bordered"
              />
            </label>
            <label className="label">
            </label>
            <label className="input-group">
              <span>email</span>
              <input
                type="text"
                placeholder="info@gmail.com"
                className="input input-bordered "
              />
            </label>

            <select className="select select-bordered w-[300px] mt-2">
              <option disabled selected>
                Division
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-[300px] mt-2 ">
              <option disabled selected>
                Zilla
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-[300px] mt-2  ">
              <option disabled selected>
                opozella
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <button className="btn hover:bg-primary mt-2 btn-outline mx-2 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
};

export default CreateAccount;