import { FC, HTMLAttributes } from 'react'
import s from './btnrows.module.sass'
import Button from '../Button/Button';

type rowNumber = 1 | 2 | 3 | 4 | 5;
interface IRow extends HTMLAttributes<HTMLDivElement> {
    className: string;
    row: rowNumber;
    handleEquals?: () => void;
    handleReset?: () => void;
    handleDelete?: () => void;
    handleNumInput: (num: string) => void;
    handleOperation: (sign: string) => void;
}

const BtnRow : FC<IRow> = ({row, handleEquals, handleReset, handleDelete, handleNumInput, handleOperation}) => {

    const handleRows = () => {
        switch(row) {
            case 1:
                return (
                    <div className={`${s.btnRow}`} >
                        <Button type="numbtn" children="7" onClick={() => handleNumInput("7")}/>
                        <Button type="numbtn" children="8" onClick={() => handleNumInput("8")}/>
                        <Button type="numbtn" children="9" onClick={() => handleNumInput("9")}/>
                        <Button type="otherbtn" children="DEL" onClick={handleDelete}/>
                    </div>
                )
            case 2:
                return (
                    <div className={`${s.btnRow}`}>
                        <Button type="numbtn" children="4" onClick={() => handleNumInput("4")}/>
                        <Button type="numbtn" children="5" onClick={() => handleNumInput("5")}/>
                        <Button type="numbtn" children="6" onClick={() => handleNumInput("6")}/>
                        <Button type="funcbtn" children="+" onClick={() => handleOperation("+")}/>
                    </div>
                )
            case 3:
                return (
                    <div className={`${s.btnRow}`}>
                        <Button type="numbtn" children="1" onClick={() => handleNumInput("1")}/>
                        <Button type="numbtn" children="2" onClick={() => handleNumInput("2")}/>
                        <Button type="numbtn" children="3" onClick={() => handleNumInput("3")}/>
                        <Button type="funcbtn" children="-" onClick={() => handleOperation("-")}/>
                    </div>
                )
            case 4:
                return (
                    <div className={`${s.btnRow}`}>
                        <Button type="funcbtn" children="." onClick={() => handleOperation(".")}/>
                        <Button type="numbtn" children="0"  onClick={() => handleNumInput("0")}/>
                        <Button type="funcbtn" children="/" onClick={() => handleOperation("/")}/>
                        <Button type="funcbtn" children="X" onClick={() => handleOperation("*")}/>
                    </div>
                )
            case 5:
                return (
                    <div className={`${s.btnRow} ${s.fifthRow}`}>
                        <Button type="reset" children="RESET" onClick={handleReset}/>
                        <Button type="equals" children="=" onClick={handleEquals}/>
                    </div>
                )
        }
    }

    return (
        <>{handleRows()}</>
    )
}

export default BtnRow