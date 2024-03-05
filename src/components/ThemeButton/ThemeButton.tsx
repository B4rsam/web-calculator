import { FC } from 'react'
import s from './themebutton.module.sass'

interface ITheme {
    themeChange : () => void
}
const ThemeButton : FC<ITheme>= ({themeChange}) => {
    const handleTheme = () => {
        const element = document.querySelector("span")
        const state = element?.getAttribute("data-toggle-state")

        switch(state) {
            case "1":
                element?.setAttribute("data-toggle-state", "2")
                break;
            case "2":
                element?.setAttribute("data-toggle-state", "3")
                break;
            case "3":
                element?.setAttribute("data-toggle-state", "1")
                break;
        }

        themeChange()
    }
    return (
        <label className={s.outerLabel}>
            <button className={s.button} onClick={handleTheme}></button>
            <span data-toggle-state={"1"} className={s.innerLabel}></span>
        </label>
    )
}

export default ThemeButton