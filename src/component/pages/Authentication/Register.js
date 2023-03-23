import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //step 01
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    // step 02
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  //  step 03
  if (loading || updating) {
    return <Loading></Loading>;
  }

  // step 04
  let signInError;
  if (error || updateError) {
    signInError = <p>{error?.message || updateError?.message}</p>;
  }
  // step 05
  
  if(user){
    navigate('/home')
  }

  return (
    <div className="">
      <div className="grid justify-center">
        <h1 className="lg:text-5xl font-bold mb-12 mt-4 text-center">
          Register
        </h1>
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
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Write name"
                      class="input input-bordered w-full max-w-xs"
                      {...register(
                        "name",

                        {
                          required: {
                            value: true,
                            message: "name is required",
                          },
                        }
                      )}
                    />
                    <label class="label">
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Write email"
                      class="input input-bordered w-full max-w-xs"
                      {...register(
                        "email",

                        {
                          required: {
                            value: true,
                            message: "email is required",
                          },

                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid email",
                          },
                        }
                      )}
                    />
                    <label class="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Write password"
                      class="input input-bordered w-full max-w-xs"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "password is required",
                        },

                        minLength: {
                          value: 6,
                          message: "Must Be a 6 Caracter",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {signInError}
                  <input
                    type="submit"
                    className="btn  w-full max-w-xs"
                    value="Sign Up"
                  />
                  <p>
                    Already Account..?
                    <Link to="/login">
                      <span className="text-primary">......login</span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
