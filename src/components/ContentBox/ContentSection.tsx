import s from './contentsection.module.sass'
import DisplayBox from '../Primitives/DisplayBox/DisplayBox'
import Button from '../Primitives/Button/Button'

const ContentSection = () => {
    return (
        <div className={s.contentSection}>
            <div className={s.headerSection}>
                <p className={s.title}>Web Calculator</p>
                <Button type="funcbtn" children="Dummy"/>
            </div>
            <DisplayBox />
        </div>
    )
}

export default ContentSection