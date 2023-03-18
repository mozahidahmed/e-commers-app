import React from 'react';

const ThreeCard = () => {
    return (
      <div className="bg-[#FFC73B]">
        <div className="grid justify-center p-12">
          <h1 className="text-5xl font-bold mb-12 mt-4 text-center">
            Find%_Nearby_%Places
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="p-6 ">
                <img
                  src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/adorable-children-playing-with-constructor-in-kind-Y6DJRAG.jpg"
                  alt="Shoes"
                  className="rounded-[30px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Kindergarten</h2>
                <p className="text-justify">
                  Jl. Sekola Panda I Block D No.88 Dermawartani, Clasan.
                  Souleman. Special Region Baharina Town. Call :
                  081-88X7-45GH-887C
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="p-6 ">
                <img
                  src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/group-of-diverse-students-at-daycare-PEBBJWW.jpg"
                  alt="Shoes"
                  className="rounded-[30px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Kindergarten</h2>
                <p className="text-justify">
                  Jl. Sekola Panda I Block D No.88 Dermawartani, Clasan.
                  Souleman. Special Region Baharina Town. Call :
                  081-88X7-45GH-887C
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="p-6 ">
                <img
                  src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/group-painting-in-kindergarten-PPB6ZV7.jpg"
                  alt="Shoes"
                  className="rounded-[30px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Kindergarten</h2>
                <p className="text-justify">
                  Jl. Sekola Panda I Block D No.88 Dermawartani, Clasan.
                  Souleman. Special Region Baharina Town. Call :
                  081-88X7-45GH-887C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ThreeCard;