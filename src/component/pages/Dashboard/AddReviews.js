import React from 'react';
import { useForm } from "react-hook-form";

const AddReviews = () => {
     const { register, handleSubmit } = useForm();
    return (
      <div className="mt-12">
       

        <form
          onSubmit=""
          className="grid grid-cols-1 gap-3 justify-items-center mt-4"
        >
          <label></label>
          <input
            placeholder="Y O U R N A M E "
            class="input input-bordered w-full max-w-xs"
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="I M A G E  U R L "
            class="input input-bordered w-full max-w-xs"
            type="img"
            {...register("img", { required: true, maxLength: 20 })}
          />
          <textarea
            placeholder="Y O U R R E V I E W "
            class="textarea input-bordered w-full max-w-xs"
            type="text"
            {...register("description", { required: true, maxLength: 20 })}
          />

          <button className="btn w-full max-w-xs" type="submit">
            Add Review
          </button>
        </form>
      </div>
    );
};

export default AddReviews;