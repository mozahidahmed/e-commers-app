import React from 'react';

const Banner = () => {
    return (
      <div className=" bg-gray-200 px-6 py-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12   justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 ">
              Welcome to Find_Teacher.com
            </h1>

            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              veritatis praesentium quas optio facilis rerum possimus, culpa eum
              aliquam pariatur neque repellat ratione exercitationem iusto.
              Recusandae, repudiandae laborum? Ipsa, ea.
            </p>
            <button className="btn btn-outline">Find Now tour best Teacher</button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;