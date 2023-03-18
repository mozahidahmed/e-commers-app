import React from 'react';

const QualifiedTeacher = () => {
    return (
      <div className="px-6 py-6">
        <p className='font-bold text-center mt-6 text-[red]'>OUR TEACHERS</p>
        <h1 className="text-5xl font-bold mb-12 mt-4 text-center">
          Our_Qualified_(Teacher
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   justify-center items-center">
          <div className="">
            <img
              className="rounded-[30px]"
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/teacher-05.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded-[30px]"
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/teacher-06.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded-[30px]"
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/teacher-07.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded-[30px]"
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/teacher-08.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default QualifiedTeacher;