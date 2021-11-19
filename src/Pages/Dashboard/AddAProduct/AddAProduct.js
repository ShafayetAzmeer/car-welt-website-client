import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
      fetch("https://fierce-lake-25951.herokuapp.com/addNewProduct", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    }) 
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
          alert('Product has added successfully.')
          reset();
        }
        });
      };
    

  return (
      <div>
      <div>
        <h1 className="mt-5 text-center text-primary fw-bold">Add A New Product</h1>
        <div className="login-box w-50 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form px-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 w-100 mt-4"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 w-100 mt-4"
                />
                <br />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 mt-4 w-100"
                />
                <br />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 w-100 mt-4"
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-primary w-50 mb-4 mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;