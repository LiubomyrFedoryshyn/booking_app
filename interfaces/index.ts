export interface IFormValues {
  Destination: "string";
  Dates: { endDate: string; startDate: string };
  RoomGuests: IRoomValues[];
}

export interface IRoomValues {
  adults: number;
  children: number;
}

export type IconProps = {
  className?: string;
  onClick: (val: any) => void;
};
