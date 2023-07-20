import React from "react";
import { useForm } from "react-hook-form";
import { Input, DatePicker, RoomSelector } from "@components/form-compoments";
import Button from "./Button";
import { IFormValues } from "@interfaces/index";

const BookingBar = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormValues>();
  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-xl card flex justify-center items-center my-4 mx-auto flex-wrap lg:justify-between lg:flex-nowrap">
        <div className="flex justify-between w-full flex-wrap">
          <Input
            errors={errors}
            register={register}
            required
            label="Destination"
            name="Destination"
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
            required
            setValue={setValue}
            errors={errors}
            register={register}
            name="RoomGuests"
            label="Room & Guests"
            placeholder="How may rooms do you need?"
          />
          <Input
            type="number"
            errors={errors}
            register={register}
            required
            name="BIN"
            label="Verify your BIN"
            placeholder="Enter first 6 digits"
          />
        </div>
        <Button
          className="btn rounded-full lg:ml-24"
          buttonDisabled={!isValid && !isDirty}
          label="Search"
        />
      </div>
    </form>
  );
};

export default BookingBar;
