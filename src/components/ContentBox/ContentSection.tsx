import s from './contentsection.module.sass'
import DisplayBox from '../Primitives/DisplayBox/DisplayBox'
import { FC } from 'react'
import ThemeArea from '../ThemeArea/ThemeArea'

interface IContent {
    displayContent: string
    themeChange: () => void
}
const ContentSection : FC<IContent> = ({displayContent, themeChange}) => {
    return (
        <div className={s.contentSection}>
            <div className={s.headerSection}>
                <p className={s.title}>Web Calculator</p>
                <ThemeArea themeChange={themeChange}/>
            </div>
            <DisplayBox displayContent={displayContent}/>
        </div>
    )
}

export default ContentSection