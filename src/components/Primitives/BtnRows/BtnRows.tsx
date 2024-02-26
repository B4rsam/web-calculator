import { FC, HTMLAttributes } from 'react'
import s from './btnrows.module.sass'
import Button from '../Button/Button';

type rowNumber = 1 | 2 | 3 | 4 | 5;
interface IRow extends HTMLAttributes<HTMLDivElement> {
    className: string;
    row: rowNumber;
}

const BtnRow : FC<IRow> = ({className, row}) => {

    const handleRows = () => {
        switch(row) {
            case 1:
                return (
                    <div >
                        <Button type="numbtn" children="7"/>
                        <Button type="numbtn" children="8"/>
                        <Button type="numbtn" children="9"/>
                        <Button type="otherbtn" children="DEL"/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Button type="numbtn" children="4"/>
                        <Button type="numbtn" children="5"/>
                        <Button type="numbtn" children="6"/>
                        <Button type="funcbtn" children="+"/>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Button type="numbtn" children="1"/>
                        <Button type="numbtn" children="2"/>
                        <Button type="numbtn" children="3"/>
                        <Button type="funcbtn" children="-"/>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Button type="funcbtn" children="."/>
                        <Button type="numbtn" children="0"/>
                        <Button type="funcbtn" children="/"/>
                        <Button type="funcbtn" children="X"/>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <Button type="otherbtn" children="RESET" className="resetBtn"/>
                        <Button type="equals" children="="/>
                    </div>
                )
        }
    }

    return (
        <>{handleRows()}</>
    )
}

export default BtnRow