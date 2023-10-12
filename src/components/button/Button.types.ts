import {MouseEventHandler} from "react";

export interface ButtonProps {
    text: string
    type: 'primary'| 'secondary' | 'error'
    onClick: MouseEventHandler<HTMLButtonElement>
}