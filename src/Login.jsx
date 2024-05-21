import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/logo.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add  form submission logic here

    navigate("/menu/reportLoss");
  };
  return (
    <div className="mt-[60px]">
      <div className="hero min-h-screen ">
        <div className="card w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <img
              src={logo}
              className="h-40 w-40 rounded-full mx-auto"
              alt="valley-hatchery"
            />

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="text-gray-600 input input-bordered bg-gray-200"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-gray-200"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
