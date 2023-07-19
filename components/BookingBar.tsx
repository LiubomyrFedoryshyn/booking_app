import React from "react";
import { Input, DatePicker, RoomSelector } from "./form-compoments";
import Button from "./Button";

const BookingBar = () => (
  <div className="rounded-xl card flex justify-between items-center my-4">
    <div className="flex justify-between">
      <Input label="Destination" placeholder="Where can we take you?" />
      <DatePicker label="Stay Dates" placeholder="What does should we block?" />
      <RoomSelector
        label="Room & Guests"
        placeholder="How may rooms do you need?"
      />
      <Input label="Verify your BIN" placeholder="Enter first 6 digits" />
    </div>
    <Button
      buttonDisabled={false}
      label="Search"
      onClick={() => console.log("searched")}
    />
  </div>
);

export default BookingBar;
