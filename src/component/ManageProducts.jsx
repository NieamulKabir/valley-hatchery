import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ManageProducts = () => {
  const { register, handleSubmit, setValue, getValues, watch, reset } = useForm();
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchProductDetails = async (sku) => {
    try {
      const response = await fetch(`/api/products/${sku}`);
      if (response.ok) {
        const product = await response.json();
        setValue("productName", product.name);
        setValue("cost", product.cost);
        setIsUpdating(true);
      } else {
        setValue("productName", "");
        setValue("cost", "");
        setIsUpdating(false);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      setIsUpdating(false);
    }
  };

  const handleSkuChange = (e) => {
    const sku = e.target.value;
    if (sku) {
      fetchProductDetails(sku);
    }
  };

  const onSubmit = async (data) => {
    const { sku, productName, cost } = data;
    try {
      if (isUpdating) {
        // Update existing product
        const response = await fetch(`/api/products/${sku}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: productName, cost }),
        });
        if (response.ok) {
          console.log("Product updated successfully");
          reset();
          setIsUpdating(false);
        } else {
          console.error("Error updating product");
        }
      } else {
        // Add new product
        const response = await fetch(`/api/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sku, name: productName, cost }),
        });
        if (response.ok) {
          console.log("Product added successfully");
          reset();
        } else {
          console.error("Error adding product");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="mx-2">
      <h1 className="text-center mt-[100px] text-3xl font-bold">Manage Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-10 rounded-xl bg-gray-300 p-9 lg:max-w-[50%]"
      >
        <div className="text-left mx-auto">
          {/* SKU */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="sku">
              SKU:
            </label>
            <input
              className="w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="sku"
              id="sku"
              required
              {...register("sku", { required: "SKU is required" })}
              onChange={handleSkuChange}
            />
          </div>
          {/* Product Name */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="productName">
              Product Name:
            </label>
            <input
              className="w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="productName"
              id="productName"
              required
              {...register("productName", { required: "Product name is required" })}
            />
          </div>
          {/* Cost */}
          <div className="flex justify-center items-center mb-2">
            <label className="pr-2 w-[30%] font-semibold" htmlFor="cost">
              Cost:
            </label>
            <input
              className="w-[70%] rounded-md bg-[#ffffff] px-3 py-2"
              type="text"
              name="cost"
              id="cost"
              required
              {...register("cost", { required: "Cost is required" })}
            />
          </div>
          <div className="md:flex text-left justify-center items-center md:ml-[56px]">
            <button className="btn my-2 mx-2" type="submit">
              {isUpdating ? "Update Existing Product" : "Add New Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageProducts;
