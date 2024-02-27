import s from './btnsection.module.sass'
import BtnRow from '../Primitives/BtnRows/BtnRows'
import { FC, HTMLAttributes } from 'react'

interface IBtnSection extends HTMLAttributes<HTMLDivElement> {
    functions: object
    handleNumInput: (num: string) => void
    handleOperation: (sign: string) => void
}

const BtnSection : FC<IBtnSection> = ({functions, handleNumInput, handleOperation}) => {
    return (
        <div className={s.btnBox}>
            <BtnRow className={s.row} row={1} handleDelete={() => functions.delete()} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
            <BtnRow className={s.row} row={2} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
            <BtnRow className={s.row} row={3} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
            <BtnRow className={s.row} row={4} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
            <BtnRow className={s.row} row={5} handleEquals={() => functions.equals()} handleReset={() => functions.reset()} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
        </div>
    )
}

export default BtnSection