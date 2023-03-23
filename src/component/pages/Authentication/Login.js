
import { useSignInWithEmailAndPassword,} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";



const Login = () => {
  const navigate = useNavigate();
  // step 01
  const {register, formState: { errors }, handleSubmit,} = useForm();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  // step 02
 const onSubmit = (data) => {
   signInWithEmailAndPassword(data.email, data.password);
 };

//  step 03
 let signInError;
  if ( error) {
    signInError = <p>{error?.message }</p>;
  }

// step 04 
  if (loading ) {
    return <Loading></Loading>;
  }

 
// step 05
if(user){
  navigate("/home")
}
 

  return (
    <div>
      <div className="grid justify-center">
        <h1 className="lg:text-5xl font-bold mb-12 mt-4 text-center">Login</h1>
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
            <div className="">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
            
                  <form onSubmit={handleSubmit(onSubmit)}>
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

                    <p className="text-red-500">{signInError}</p>
                    <input
                      type="submit"
                      className="btn  w-full max-w-xs"
                      value="Login"
                    />
                    <p>
                      New to my company ?
                      <Link to="/register">
                        <span className="text-primary">
                          ..Create New Acccotunt
                        </span>
                      </Link>
                    </p>
                  </form>

                  {/* <div class="divider">OR</div>
          <button
           onClick={() =>signInWithGoogle()}
          class="btn btn-outline">Continue with Google</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
