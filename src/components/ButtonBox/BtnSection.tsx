import s from './btnsection.module.sass'
import BtnRow from '../Primitives/BtnRows/BtnRows'
import { FC, HTMLAttributes } from 'react'

interface IBtnSection extends HTMLAttributes<HTMLDivElement> {
    functions: object;
    handleNumInput: (num: string) => void
}

const BtnSection : FC<IBtnSection> = ({functions, handleNumInput}) => {
    return (
        <div className={s.btnBox}>
            <BtnRow className={s.row} row={1} handleDelete={() => functions.delete()} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={2} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={3} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={4} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={5} handleEquals={() => functions.equals()} handleReset={() => functions.reset()} handleNumInput={handleNumInput}/>
        </div>
    )
}

export default BtnSection