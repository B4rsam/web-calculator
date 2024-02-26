import s from './btnsection.module.sass'
import Button from '../Primitives/Button/Button'
import BtnRow from '../Primitives/BtnRows/BtnRows'

const BtnSection = () => {
    return (
        <div className={s.btnBox}>
            <BtnRow className={s.row} row={1}/>
            <BtnRow className={s.row} row={2}/>
            <BtnRow className={s.row} row={3}/>
            <BtnRow className={s.row} row={4}/>
            <BtnRow className={s.row} row={5}/>
        </div>
    )
}

export default BtnSection