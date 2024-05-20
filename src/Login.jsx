const Login = () => {
  return (
    <div className="mt-[60px]">
     
      <div className="hero min-h-screen ">
        
        <div className="card w-full max-w-sm shadow-2xl ">
          <form className="card-body">
            <h1 className="text-center text-xl font-bold">Logo</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="text-gray-600 input input-bordered bg-gray-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-gray-200"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
