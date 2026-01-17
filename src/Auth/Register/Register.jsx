import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { singInGoogle, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handelGoogleSingIn = () => {
    singInGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIn Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        setUser(newUser);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-20 md:flex justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.volvobuses.com/content/dam/volvo-buses/markets/global/classic/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg"
          className="md:max-w-sm rounded-lg shadow-2xl"
        />
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-4xl font-bold">Register Now</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input disabled type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input disabled type="password" className="input" placeholder="Password" />
            <div>
              <Link to="/login" className="link link-hover">
                I have an Account?{" "}
                <span className="font-bold text-blue-500">LogIn</span>
              </Link>
            </div>
            <button disabled className="btn btn-neutral mt-4">Register</button>
            <h2 className="text-center font-bold">Or</h2>
            <button
              onClick={handelGoogleSingIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
