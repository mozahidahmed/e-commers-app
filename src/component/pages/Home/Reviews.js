import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="bg-[#F73775] py-12 mt-6">
      <div className="grid justify-center p-12 ">
        <h1 className="lg:text-5xl font-bold mb-12 mt-4 text-center">
          What “Parents” Say About Us
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   justify-center items-center">
          {review.map((data) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="flex bg-base-100 rounded-lg p-6">
                  <div className="p-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/adorable-children-playing-with-constructor-in-kind-Y6DJRAG.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <h1 className="font-bold">{data.name}</h1>
                    <p>
                      {data.review}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
