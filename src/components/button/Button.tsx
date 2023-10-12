import React, {FunctionComponent} from 'react';
import {ButtonProps} from "./Button.types";
import "./Button.css";
const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <button
            type={'button'}
            className={`Button Button-${props.type}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
