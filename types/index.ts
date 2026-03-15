import { MouseEventHandler } from "react";

export interface CarProps {
  make: string;
  year: number;
  model: string;
  drive: string;
  class: string;
  city_mpg: number;
  cylinders: number;
  fuel_type: string;
  highway_mpg: number;
  transmission: string;
  displacement: number;
  combination_mpg: number;
}

export interface FilterProps {
  year?: number;
  fuel?: string;
  model?: string;
  limit?: number;
  manufacturer?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  mpg: number;
  make: string;
  year: number;
  model: string;
  drive: string;
  cityMPG: number;
  transmission: string;
}

export interface CustomButtonProps {
  title: string;
  rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string | null) => void;
}
