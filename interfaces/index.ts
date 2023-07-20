// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type FormProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export interface IFormValues {
  Destination: "string";
  Dates: { endDate: string; startDate: string };
}

export interface IRoomValues {
  adults: number;
  children: number;
}

export type IconProps = {
  className?: string;
  onClick: (val: any) => void;
};
