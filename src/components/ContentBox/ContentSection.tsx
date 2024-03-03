import s from './contentsection.module.sass'
import DisplayBox from '../Primitives/DisplayBox/DisplayBox'
import Button from '../Primitives/Button/Button'
import { FC } from 'react'

interface IContent {
    displayContent: string
    themeChange: () => void
}
const ContentSection : FC<IContent> = ({displayContent, themeChange}) => {
    return (
        <div className={s.contentSection}>
            <div className={s.headerSection}>
                <p className={s.title}>Web Calculator</p>
                <Button type="funcbtn" children="WiP" onClick={themeChange}/>
            </div>
            <DisplayBox displayContent={displayContent}/>
        </div>
    )
}

export default ContentSection