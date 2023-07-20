import React, { Fragment, useState, useRef, useEffect } from "react";
import { Path, UseFormRegister, UseFormSetValue } from "react-hook-form";
import classNames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import { IFormValues, IRoomValues } from "@interfaces/index";
import { BedIcon, MinusIcon, PlusIcon } from "@assets/svg";
import { MAX_PEOPLE, REQUIRED_ERROR, ROOMS_COUNT } from "@utils/constants";

const ROOMS_OBJ = { adults: 0, children: 0 };

type InputProps = {
  name: Path<IFormValues>;
  label: string;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  errors: any;
  required?: boolean;
  setValue: UseFormSetValue<IFormValues>;
};

const RoomSelector = ({
  label,
  name,
  errors,
  required,
  register,
  setValue,
  placeholder = "Set a value",
}: InputProps) => {
  const inputRef = useRef(null);
  const isInitialRender = useRef(true);
  const [roomsDetails, setRoomsDetails] = useState<IRoomValues[]>([ROOMS_OBJ]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return; // Skip  useEffect on the first render
    }
    setInputValue();
  }, [roomsDetails]);

  const changeRooms = (i: number) => {
    if (roomsDetails.length > i && roomsDetails.length > 1) {
      setRoomsDetails([...roomsDetails.filter((el, index) => i !== index)]);
    } else {
      setRoomsDetails([...roomsDetails, ROOMS_OBJ]);
    }
  };

  const changeValue = (
    i: number,
    value: number,
    valueType: string,
    funcType
  ) => {
    if (i >= 0 && i < roomsDetails.length) {
      const newArray = [...roomsDetails];
      newArray[i] = {
        ...newArray[i],
        [valueType]: funcType === "increment" ? ++value : --value,
      };
      setRoomsDetails(newArray);
    }
  };

  const setInputValue = () => {
    const adults = roomsDetails.map((el) => el.adults);
    const children = roomsDetails.map((el) => el.children);
    const containEmptyObject = roomsDetails.some(
      (obj) => obj.children === 0 && obj.adults === 0
    );

    if (
      (calcValues(adults) > 0 || calcValues(children) > 0) &&
      !containEmptyObject
    ) {
      const inputValue = `${roomsDetails.length} Rooms, ${calcValues(
        adults
      )} adults, ${calcValues(children)} children`;
      inputRef.current.value = inputValue;
      setValue(name, inputValue, { shouldValidate: true, shouldDirty: true });
    } else {
      inputRef.current.value = "";
      setValue(name, "", { shouldValidate: true, shouldDirty: true });
    }
  };

  const calcValues = (arr) => arr.reduce((a, b) => a + b);

  return (
    <div className="mb-6 lg:mb-0">
      {label && <label className="label">{label}</label>}
      <div>
        <Popover className="relative">
          <Popover.Button className="outline-none">
            <input
              {...register(name, {
                required: required ? REQUIRED_ERROR : false,
              })}
              ref={inputRef}
              name={name}
              className="input large-input"
              type="text"
              placeholder={placeholder}
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-10 flex -translate-x-1/2 px-4">
              <div className="w-80 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg">
                <div className="group relative flex gap-x-6 rounded-lg py-5 px-6 hover:bg-gray-50 divide-y">
                  <div className="flex justify-between items-center w-full">
                    <h5 className="title">Rooms</h5>
                    <div className="icons-wrapper flex">
                      {[...Array(ROOMS_COUNT)].map((e, i) => (
                        <BedIcon
                          onClick={() => changeRooms(i)}
                          className={classNames({
                            active: roomsDetails[i],
                          })}
                          key={i + "icon"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {roomsDetails.map((el, i) => {
                  return (
                    <div key={i}>
                      <div className="separator mx-6"></div>
                      <div className="selector-body group relative flex gap-x-6 rounded-lg py-5 px-6 hover:bg-gray-50">
                        <div className="w-full">
                          <h6 className="sub-title mb-4">Room {i + 1}</h6>
                          <div className="flex justify-between items-center mb-6">
                            <div>
                              <h5 className="title">Adults</h5>
                              <p className="description">Ages 17 or above</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <MinusIcon
                                className={classNames({
                                  disabled: el.adults < 1,
                                })}
                                onClick={() =>
                                  changeValue(
                                    i,
                                    el.adults,
                                    "adults",
                                    "decrement"
                                  )
                                }
                              />
                              <span className="title mx-4">{el.adults}</span>
                              <PlusIcon
                                className={classNames({
                                  disabled:
                                    el.children + el.adults >= MAX_PEOPLE,
                                })}
                                onClick={() =>
                                  changeValue(
                                    i,
                                    el.adults,
                                    "adults",
                                    "increment"
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <h5 className="title">Children</h5>
                              <p className="description">Ages 0 to 17</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <MinusIcon
                                className={classNames({
                                  disabled: el.children < 1,
                                })}
                                onClick={() =>
                                  changeValue(
                                    i,
                                    el.children,
                                    "children",
                                    "decrement"
                                  )
                                }
                              />
                              <span className="title mx-4">{el.children}</span>
                              <PlusIcon
                                className={classNames({
                                  disabled:
                                    el.children + el.adults >= MAX_PEOPLE,
                                })}
                                onClick={() =>
                                  changeValue(
                                    i,
                                    el.children,
                                    "children",
                                    "increment"
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      {errors.RoomGuests && (
        <span className="error">{errors.RoomGuests.message}</span>
      )}
    </div>
  );
};

export default RoomSelector;
