import React from "react";
import { useForm } from "react-hook-form";
import { Input, DatePicker, RoomSelector } from "./form-compoments";
import Button from "./Button";
import { IFormValues } from "../interfaces";

const BookingBar = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormValues>();
  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-xl card flex justify-between items-center my-4 mx-auto">
        <div className="flex justify-between w-full">
          <Input
            errors={errors}
            register={register}
            required
            label="Destination"
            placeholder="Where can we take you?"
          />

          <DatePicker
            control={control}
            errors={errors}
            name="Dates"
            required
            label="Stay Dates"
            placeholder="What dates should we block?"
          />

          <RoomSelector
            label="Room & Guests"
            placeholder="How may rooms do you need?"
          />
          {/* <Input label="Destination" placeholder="Enter first 6 digits" /> */}
        </div>
        <Button
          buttonDisabled={false}
          // buttonDisabled={!isValid}
          label="Search"
        />
      </div>
    </form>
  );
};

export default BookingBar;
