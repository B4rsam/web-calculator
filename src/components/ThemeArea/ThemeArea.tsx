import { FC } from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import s from './themearea.module.sass'

interface IThemeArea {
    themeChange : () => void
}
const ThemeArea : FC<IThemeArea> = ({themeChange}) => {
    return (
        <div className={s.themeBox}>
            <p className={s.themeText}>Theme</p>
            <ThemeButton themeChange={themeChange}/>
        </div>
    )
}

export default ThemeArea