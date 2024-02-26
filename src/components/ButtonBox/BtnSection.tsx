import s from './btnsection.module.sass'
import Button from '../Primitives/Button/Button'
import BtnRow from '../Primitives/BtnRows/BtnRows'
import { FC, HTMLAttributes } from 'react'

interface IBtnSection extends HTMLAttributes<HTMLDivElement> {
    handleEquals: any;
    handleReset: any;
    handleDelete: any;
    handleNumInput: any
}

const BtnSection : FC<IBtnSection> = ({handleEquals, handleReset, handleDelete, handleNumInput}) => {
    return (
        <div className={s.btnBox}>
            <BtnRow className={s.row} row={1} handleDelete={handleDelete} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={2} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={3} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={4} handleNumInput={handleNumInput}/>
            <BtnRow className={s.row} row={5} handleEquals={handleEquals} handleReset={handleReset} handleNumInput={handleNumInput}/>
        </div>
    )
}

export default BtnSection