import s from './btnsection.module.sass'
import Button from '../Primitives/Button/Button'
import BtnRow from '../Primitives/BtnRows/BtnRows'
import { FC, HTMLAttributes } from 'react'

interface IBtnSection extends HTMLAttributes<HTMLDivElement> {
    functions: object;
}

const BtnSection : FC<IBtnSection> = ({functions}) => {
    return (
        <div className={s.btnBox}>
            <BtnRow className={s.row} row={1} handleDelete={() => functions.delete()} handleNumInput={() => functions.numInput()}/>
            <BtnRow className={s.row} row={2} handleNumInput={() => functions.numInput()}/>
            <BtnRow className={s.row} row={3} handleNumInput={() => functions.numInput()}/>
            <BtnRow className={s.row} row={4} handleNumInput={() => functions.numInput()}/>
            <BtnRow className={s.row} row={5} handleEquals={() => functions.equals()} handleReset={() => functions.reset()} handleNumInput={() => functions.numInput()}/>
        </div>
    )
}

export default BtnSection