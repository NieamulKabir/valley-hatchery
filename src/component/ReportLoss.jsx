import { useFieldArray, useForm } from "react-hook-form";

const ReportLoss = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      skus: [{ skuId: "", lossQuantity: "" }], // Default values for SKU and loss quantity
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skus", // Name of the field array
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Add form submission logic here

    try {
      const response = await fetch(
        "https://your-api-endpoint.com/report-loss",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Success:", result);
      // Handle success (e.g., display a success message, reset the form, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display an error message)
    }
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
          <div className="text-left">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="lg:flex lg:justify-center lg:items-center mb-4 md:mb-6 lg:mb-8"
              >
                <label
                  className="pr-2 font-semibold w-full"
                  htmlFor={`skus[${index}].skuId`}
                >
                  Enter SKU ID:
                </label>
                <input
                  className="mr-2 rounded-md bg-[#ffffff] px-3 py-2 w-full"
                  type="text"
                  name={`skus[${index}].skuId`}
                  id={`skus[${index}].skuId`}
                  {...register(`skus[${index}].skuId`)}
                />
                <label
                  className="pr-2  font-semibold "
                  htmlFor={`skus[${index}].lossQuantity`}
                >
                  Loss Quantity:
                </label>
                <input
                  className="w-full rounded-md bg-[#ffffff] px-3 py-2"
                  type="number"
                  name={`skus[${index}].lossQuantity`}
                  id={`skus[${index}].lossQuantity`}
                  {...register(`skus[${index}].lossQuantity`)}
                />
                <button
                  className="btn ml-2"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-wrap justify-end text-left">
              <button
                type="button"
                className="btn my-2 mx-2"
                onClick={() => append({ skuId: "", lossQuantity: "" })}
              >
                Add More SKUs
              </button>
              <button type="submit" className="btn my-2">
                Save Loss Report
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportLoss;
