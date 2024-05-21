const RunReport = () => {
    return (
      <div className="mx-2">
        <h1 className="text-center mt-[100px] text-3xl font-bold">Run Report </h1>
        <form className="my-10 rounded-xl bg-gray-300 p-9 md:max-w-[60%]  mx-auto ">
          <div className="text-left lg:flex md:max-w-full lg:justify-center items-center">
            {/* start date  */}
            <div className="flex justify-center items-center mb-2 mr-10">
              <label className="pr-2 font-semibold" htmlFor="startDate">
                Start <span className="text-pink-600">Date</span>:
              </label>
              <input
                className="rounded-md bg-[#ffffff] px-3 py-2 justify-end"
                type="date"
                name="startDate"
                id="startDate"
                required
              />
            </div>
            {/* last name  */}
            <div className="flex justify-center items-center mb-2 mr-10">
              <label className="pr-2 font-semibold" htmlFor="endDate">
                End <span className="text-pink-600">Date</span>:
              </label>
              <input
                className="rounded-md bg-[#ffffff] px-3 py-2 justify-end"
                type="date"
                name="endDate"
                id="endDate"
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
  