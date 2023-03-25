import React, { useState, useEffect } from "react";

const SearchTeacher = () => {

  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState([]);
  const [division, setDivision] = useState("");
  const [zilla, setZilla] = useState("");

  useEffect(() => {

      fetch("Data.json")
      .then((res) => res.json())
      .then((data) => 
      setUserData(data))
     

       
  }, []);

  const handleSearch = () => {
    const newData = userData
      .filter((y) => y.zilla === (zilla === "" ? y.zilla : zilla))
      .filter((y) => y.division === (division === "" ? y.division : division));
       setSearch(newData);
   
    
  };

  return (
    <div className="py-6">
      <div className="grid justify-center ">
        <div className="grid sm:grid-cols-4  md:grid-cols-2 lg:grid-cols-5 gap-6   justify-center items-center">
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Division</span>
              </label>
              <select
                className="select select-bordered"
                onChange={(e) => setDivision(e.target.value)}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">City</span>
              </label>
              <select className="select select-bordered">
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Zilla</span>
              </label>
              <select
                className="select select-bordered"
                onChange={(e) => setZilla(e.target.value)}
              >
                <option value="MozahidD">MozahidD</option>
                <option value="MozahidS">MozahidS</option>
                <option value="MozahidB">MozahidB</option>
                <option value="MozahidK">MozahidK</option>
                <option value="kadimpara">kadimpara</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">upozella</span>
              </label>
              <select className="select select-bordered">
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>

          <div className="mt-9">
            <button
              onClick={() => handleSearch()}
              className="btn btn-outline btn-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  px-6 justify-center items-center">
        {search && search.length > 0 ? (
          search.slice(0, 6).map((data) => (
            <>
              <div className="card glass card-compact w-96 bg-base-100 shadow-xl  p-6">
                <div className="avatar grid justify-center ">
                  <div className="w-32 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/group-of-diverse-students-at-daycare-PEBBJWW.jpg"
                      alt="ghf"
                    />
                  </div>
                </div>
                <div className="text-center py-6 px-6">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <h1 className="text-2xl">{data.zilla} </h1>
                  <p>most experties teaher in sylhet</p>
                  <div className="hover:bg-primary rounded-full p-2 mt-2">
                    <h1 className="text-primary font-bold hover:text-white">
                      See More
                    </h1>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="grid justify-center">
            <h1 className="text-4xl">% search_cerfull</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTeacher;
