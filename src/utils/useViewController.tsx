import { useState } from "react"

const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")
    const [operation, setOp] = useState<string>("")
    const [functionFlag, setFlag] = useState<boolean>(false)
    let firstInput : string
    let secondInput : string

    const handleEquals = () => {
        switch(operation) {
            case "+":
                setDisplay((Number(firstInput) + Number(secondInput)).toString())
                break;
            case "-":
                setDisplay((Number(firstInput) - Number(secondInput)).toString())
                break;
            case "*":
                setDisplay((Number(firstInput) * Number(secondInput)).toString())
                break;
            case "/":
                setDisplay((Number(firstInput) / Number(secondInput)).toString())
                break;
        }
        console.log(firstInput)
        console.log(secondInput)
        console.log(display)
        console.log(operation)
    }

    const handleReset = () => {
        setDisplay("0")
        setFlag(false)
        setOp("")
        firstInput = secondInput = ""
    }

    const handleDelete = () => {
        console.log("del")
    }

    const handleOperation = (sign : string) => {
        setOp(sign)
        setFlag(true)
        setDisplay(display + sign)
    }

    const handleNumInput = (num : string) => {
        if (functionFlag === false) {
            if ( display === "0") {
                setDisplay(num)
            }
            else {
                setDisplay(display + num)
            }
            firstInput = firstInput + num
        }
        else {
            setDisplay(display + num)
            secondInput = secondInput + num
        }
    }

    return {
        display,
        handleEquals,
        handleReset,
        handleDelete,
        handleNumInput,
        handleOperation,
    }
}

export default useViewController