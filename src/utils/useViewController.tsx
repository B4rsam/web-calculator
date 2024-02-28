import { useState } from "react"
import stringMath from "string-math"

const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")
    const [operation, setOp] = useState<string>("")
    const [functionFlag, setFlag] = useState<boolean>(false)
    let firstInput : string
    let secondInput : string

    const handleEquals = () => {
        // switch(operation) {
        //     case "+":
        //         setDisplay((Number(firstInput) + Number(secondInput)).toString())
        //         break;
        //     case "-":
        //         setDisplay((Number(firstInput) - Number(secondInput)).toString())
        //         break;
        //     case "*":
        //         setDisplay((Number(firstInput) * Number(secondInput)).toString())
        //         break;
        //     case "/":
        //         setDisplay((Number(firstInput) / Number(secondInput)).toString())
        //         break;
        //     default:
        //         break;
        // }
        setDisplay(stringMath(display))
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
        if (display.length === 1) {
            setDisplay("0") 
        }
        else {
            setDisplay(display.slice(0, -1)) 
        }
    }

    const handleOperation = (sign : string) => {
        setOp(sign)
        setFlag(true)
        setDisplay(display.concat(sign))
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

    const functions = {
        equals: handleEquals,
        reset: handleReset,
        delete: handleDelete,
    }

    return {
        display,
        functions,
        handleNumInput,
        handleOperation
    }
}

export default useViewController