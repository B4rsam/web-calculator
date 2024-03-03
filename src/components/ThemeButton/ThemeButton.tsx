import { FC } from 'react'
import s from './themebutton.module.sass'

interface ITheme {
    themeChange : () => void
}
const ThemeButton : FC<ITheme>= ({themeChange}) => {
    return (
        <label className={s.outerLabel}>
            <button className={s.button} onClick={themeChange}></button>
            <span className={s.innerLabel}></span>
        </label>
    )
}

export default ThemeButton