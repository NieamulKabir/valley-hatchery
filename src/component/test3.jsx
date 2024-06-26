import { useForm } from "react-hook-form";

const ManageProducts = () => {

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add  form submission logic here

  };
  return (
    <div className="mx-2">
      <h1 className="text-center mt-[100px] text-3xl font-bold">
        Manage Product{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}  className="mx-auto my-10 rounded-xl bg-gray-300 p-9 lg:max-w-[50%] ">
        <div className="text-left mx-auto">
          {/* sku  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="sku">
              SKU:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="sku"
              id="sku"
              required
              {...register("sku", { required: "SKU is required" })}
            />
          </div>
          {/* productName  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="productName">
              Product Name:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="productName"
              id="productName"
              required
              {...register("productName", { required: "productName is required" })}
            />
          </div>

          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="cost">
              Cost:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="cost"
              id="cost"
              required
              {...register("cost", { required: "cost is required" })}
            />
          </div>

          <div className="md:flex text-left justify-center items-center md:ml-[56px]">
            <button className="btn my-2 mx-2 ">Add New Product</button>
            <button className="btn my-2 ">Update Existing Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageProducts;
