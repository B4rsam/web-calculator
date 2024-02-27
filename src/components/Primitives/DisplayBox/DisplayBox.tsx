import { FC } from 'react'
import s from './display.module.sass'

interface IDisplayProps {
    displayContent: string
}
const DisplayBox : FC<IDisplayProps> = ({displayContent}) => {

    return (
        <div className={s.displayBox}>
           {displayContent}
        </div>
    )
}

export default DisplayBox