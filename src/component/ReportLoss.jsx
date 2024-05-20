const ReportLoss = () => {
  return (
    <div>
        <h1 className="text-center mt-[100px] text-3xl font-bold">Report Loss </h1>
      <form className="mx-auto my-10 rounded-xl bg-gray-300 p-9 max-w-[50%] ">
        <div className="text-left ">
          {/* first name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="firstName">
              Customer First Name:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="firstName"
              id="firstName"
              required
            />
          </div>
          {/* last name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="lastName">
              Customer Last Name:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="lastName">
              Order Number:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          {/* Ship date  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="lastName">
              Ship Date:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          {/* Notes  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="lastName">
              Notes:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          <div className="flex justify-between text-left">
            <div className="">
              <label className="pr-2 font-semibold" htmlFor="lastName">
                Enter SKU ID:
              </label>
              <input
                className="rounded-md bg-[#ffffff] px-3 py-2"
                type="text"
                name="lastName"
                id="lastName"
                required
              />
            </div>
            <div className="">
              <label className="px-2  font-semibold" htmlFor="lastName">
                Loss Quantity:
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
          <div className="flex justify-end text-left">
            <button className="btn my-2 mx-2">Add More SKUs</button>
            <button className="btn my-2 ">Save Loss Report</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportLoss;
