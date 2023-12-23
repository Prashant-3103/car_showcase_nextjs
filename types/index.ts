import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface CustomFilter{
    title?: string;
}

export interface SearchManufacturerProps {
    manuacturer: string,
    setManufacturer: (manufacturer: string)=>void
}
