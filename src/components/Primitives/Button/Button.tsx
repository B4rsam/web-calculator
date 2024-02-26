import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'

type btnTypes = "numbtn" | "funcbtn" | "otherbtn" | "equals" | "reset";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: btnTypes;

}

const Button : FC<IButton> = ({children, type, className, ...other}) => {
    return (
        <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
    )
}

export default Button