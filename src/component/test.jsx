import { useForm } from "react-hook-form";

const ReportLoss = () => {
  const {
    register,
    handleSubmit,
    // control,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add  form submission logic here
  };

  return (
    <div className="mx-2">
      <h1 className="text-center mt-[100px] text-3xl font-bold">
        Report Loss{" "}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-10 rounded-xl bg-gray-300 p-9 md:max-w-[50%] "
      >
        <div className="text-left ">
          {/* first name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="firstName">
              First Name:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="firstName"
              id="firstName"
              required
              {...register("firstName", { required: "First Name is required" })}
            />
          </div>
          {/* last name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
              {...register("lastName", { required: "Last Name is required" })}
            />
          </div>

          {/* order number  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="orderNumber">
              Order Number:
            </label>
            <input
              className="w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="orderNumber"
              id="orderNumber"
              required
              {...register("orderNumber", {
                required: "Order Number is required",
              })}
            />
          </div>

          {/* Ship date  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="shipDate">
              Ship Date:
            </label>
            <input
              className="w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="date"
              name="shipDate"
              id="shipDate"
              required
              {...register("shipDate", { required: "ship Date is required" })}
            />
          </div>

          {/* Notes  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="notes">
              Notes:
            </label>
            <textarea
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="notes"
              id="notes"
              // required
              {...register("notes")}
            />
          </div>

          <div className="lg:flex lg:justify-between text-left">
            <div className="flex justify-center items-center mb-2">
              <label
                className="w-[30%] lg:w-full  pr-2 font-semibold"
                htmlFor="skuId"
              >
                Enter SKU ID:
              </label>
              <input
                className="w-[70%] lg:w-full lg:ml-[54px] rounded-md bg-[#ffffff] px-3 py-2"
                type="text"
                name="skuId"
                id="skuId"
                required
              />
            </div>

            <div className="flex justify-center items-center mb-2 lg:text-right">
              <label
                className="w-[30%] lg:w-full  pr-2 font-semibold md:l-[30px]"
                htmlFor="lossQuantity"
              >
                Loss Quantity:
              </label>
              <input
                className="w-[70%] lg:w-full rounded-md bg-[#ffffff] px-3 py-2"
                type="number"
                name="lossQuantity"
                id="lossQuantity"
                required
                {...register("lossQuantity", {
                  required: "lossQuantity Date is required",
                })}
              />
            </div>
          </div>

          <div className="flex justify-end text-left">
            <button type="button" className="btn my-2 mx-2">
              Add More SKUs
            </button>
            <button type="submit" className="btn my-2 ">
              Save Loss Report
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportLoss;
