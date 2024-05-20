const RunReport = () => {
  return (
    <div>
      <h1 className="text-center mt-[100px] text-3xl font-bold">Run Report </h1>
      <form className="mx-auto my-10 rounded-xl bg-gray-300 p-9 max-w-[50%] ">
        <div className="text-left flex max-w-full mx-auto">
          {/* first name  */}
          <div className="flex justify-center items-center mb-2 mr-10">
            <label className="pr-2 font-semibold" htmlFor="firstName">
              Start <span>Date</span>:
            </label>
            <input
              className="rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="firstName"
              id="firstName"
              required
            />
          </div>
          {/* last name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 font-semibold" htmlFor="lastName">
              End <span>Date</span>:
            </label>
            <input
              className="rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>
        </div>
        <div className="card-actions justify-center mt-4">
          <button className="btn ">Run Report</button>
        </div>
      </form>
    </div>
  );
};

export default RunReport;
