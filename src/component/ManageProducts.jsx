const ManageProducts = () => {
  return (
    <div>
      <h1 className="text-center mt-[100px] text-3xl font-bold">
        Manage Product{" "}
      </h1>
      <form className="mx-auto my-10 rounded-xl bg-gray-300 p-9 max-w-[50%] ">
        <div className="text-left ">
          {/* first name  */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="firstName">
              SKU:
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
              Product Name:
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
              Cost:
            </label>
            <input
              className=" w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          <div className="flex justify-end text-left">
            <button className="btn my-2 mx-2">Add New Product</button>
            <button className="btn my-2 ">Update Existing Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageProducts;
